<template>
    <div>
        <div class="card" :key="componentKey">
            <Button @click="getBusTime()" aria-label="refresh ⟳" icon="pi pi-refresh" severity="danger" style="margin-right: 0.3rem;"/>
            <strong>refreshed {{ toTime(refreshTime) }}</strong>
            <details open v-for="el in lineList" :key="el">
              <summary class="busHead">{{ el }}</summary>
              <ol class="times">
                <li v-for="item in computeFilter(el, busTimes)" :key="item.PublishedLineName">
                  <p v-if="item.MonitoredCall.ExpectedArrivalTime!=undefined">{{ Math.floor((Date.parse(item.MonitoredCall.ExpectedArrivalTime)-Date.now())/60000) }} minutes (Arrives {{ toTime(item.MonitoredCall.ExpectedArrivalTime) }})</p>
                  <p v-else style="color: lightgray">{{ Math.floor((Date.parse(item.MonitoredCall.AimedArrivalTime)-Date.now())/60000) }} minutes (Expected {{ toTime(item.MonitoredCall.AimedArrivalTime) }})</p>
                  <p v-if="stopDistance == true">{{ item.MonitoredCall.Extensions.Distances.StopsFromCall }} stops away</p>
                  <p v-if="item.MonitoredCall.Extensions.Capacities != null  && showPplOn == true">people on board: {{ item.MonitoredCall.Extensions.Capacities.EstimatedPassengerCount }}</p>
                  <p v-if="item.VehicleRef != null  && showBusNum == true">{{ item.VehicleRef.replace('MTA NYCT_', 'bus ') }}</p>
                </li>
              </ol>
              
            </details>
            <details v-if="alerts.length > 0">
        <summary class="alerts">
          service alerts ({{ alerts.length }})
        </summary>
        <div v-for="alert in alerts" class="time">
          <p class="busHead">{{ alert.Summary }}</p>
          <p v-for="line in alert.Description.split('\n')">{{ line }}</p>
        </div>
      </details>
      <div style="display: flex;">
      <SelectButton style="filter: sepia(100%) hue-rotate(270deg) brightness(150%);" v-model="favStatus" :options="['❤️']" :disabled="favDisabled"/>
      <div style="display: flex;flex-direction: column;">
      <label for="stops" style="padding: 0.3rem;"><Checkbox inputId="stops" v-model="stopDistance" :binary="true"/>show stops</label>
      <label for="pplOn" style="padding: 0.3rem;"><Checkbox inputId="pplOn" v-model="showPplOn" :binary="true"/>show people on board</label>
      <label for="BusNum" style="padding: 0.3rem;"><Checkbox inputId="BusNum" v-model="showBusNum" :binary="true"/>show bus number</label>
    </div>
  </div>
    </div>
    </div>
</template>
<script setup>
import Button from "primevue/button";
import SelectButton from "primevue/selectbutton";
import Checkbox from "primevue/checkbox";
import {watchEffect, ref, watch} from "vue";
import loading from "@/stores/loadingVar";
import { localStore } from "@/stores/local";
import { toTime } from "@/stores/functions";
import error from "@/stores/errorVar";
const local = localStore();
const props = defineProps({
  stop: Object,
});
const model = defineModel();
const componentKey = ref(0); // force component to refresh bc idk why it wasnt refreshing
const forceRerender = () => {
  componentKey.value += 1;
};
const proxy = 'https://corsproxy.io/?';
let busTimes = ref([]); // bus details and times
let lineList = ref([]);
let refreshTime = ref(''); // time of api refresh
let alerts = ref([]); // alerts
let favStatus = ref('');
let favDisabled = ref(false);

async function getBusTime(){ // fetch api
  if(props.stop.code === '🔍 stop selection' || props.stop.code === undefined){
    return;
  }
  let currentTime = Date.now();
    const timeUrl = `https://bustime.mta.info/api/2/siri/stop-monitoring.json?key=0751e36e-4a17-49a5-8dfd-292c370e1296&OperatorRef=MTA%20NYCT&MonitoringRef=MTA_${props.stop.code}&cacheBreaker=${currentTime}`;
    try{
        loading.value = true;
        const response = await fetch(proxy+timeUrl, {cache: 'reload'}); // fetch site
        const data = await response.json();
        busTimes.value = [];
        lineList.value = [];
        alerts.value = []; // reset
        refreshTime.value = '';
        processTime(data.Siri.ServiceDelivery) // manipulate the data for display
        forceRerender();
        loading.value = false;
        determineFav();
        watch(favStatus, ()=> addFav());
        if(props.stop.code != '🔍 stop selection'){
          model.value++;
        }
        if(response.status != 200){
          loading.value = true;
            throw new Error(response.statusText);
        }
    } catch (error){
      loading.value = true;
        console.log(error, "Error Fetching Buses");
    }
}
watchEffect(async() =>{getBusTime();});

function processTime(data){
    refreshTime.value = data.ResponseTimestamp; // save refresh time to var
    if(data.SituationExchangeDelivery != undefined){
      alerts.value = data.SituationExchangeDelivery[0].Situations.PtSituationElement; // display alerts
    }else{
      alerts.value = [];
    }
    data.StopMonitoringDelivery[0].MonitoredStopVisit.forEach((item)=>{
      busTimes.value.push(item.MonitoredVehicleJourney)
    }
    );
    busTimes.value.forEach((item)=>{
      lineList.value.push(item.PublishedLineName+' '+item.DestinationName) 
    });
    lineList.value = [...new Set(lineList.value)];
  }
  
function computeFilter(group, element){ // separate diff buses
  let lineMatch =  group.replace(/\s.*/, '');
  let destinationMatch = group.replace(/.*?\s/, '');
  return element.filter((el) => el.PublishedLineName === lineMatch && el.DestinationName === destinationMatch);
}

function determineFav(){
  let searchArr = [];
  local.local.favorites.forEach(item => searchArr.push(item.code.code.code))
  if(searchArr.indexOf(props.stop.code) != -1){
  favStatus.value = '❤️'
  favDisabled.value = true;
}else if(searchArr.indexOf(props.stop.code) === -1){
  favStatus.value = ''
  favDisabled.value = false;
}
}

function addFav(){
  if(favStatus.value === '❤️' && favDisabled.value === false){
    local.addFavorite(`${props.stop.name} (${busTimes.value[0].DestinationName})`, props.stop, 'bus')
    favDisabled.value = true;
  }
}

const showPplOn = ref(false)
const stopDistance = ref(true)
const showBusNum = ref(false)

</script>
<style scoped>
.time{
  text-align: left;
}
</style>