<template>
    <div>
        <div class="card" :key="componentKey">
            <strong>refreshed at {{ toTime(refreshTime) }}</strong>
            <Button @click="getBusTime()" aria-label="refresh ⟳" icon="pi pi-refresh" severity="danger"/>
            <details open v-for="el in lineList" :key="el">
              <summary class="busHead">{{ el }}</summary>
              <ol class="times">
                <li v-for="item in computeFilter(el, busTimes)" :key="item.PublishedLineName">
                  <p v-if="item.MonitoredCall.ExpectedArrivalTime!=undefined">{{ Math.floor((Date.parse(item.MonitoredCall.ExpectedArrivalTime)-Date.now())/60000) }} minutes (Arrives at {{ toTime(item.MonitoredCall.ExpectedArrivalTime) }}, {{ item.MonitoredCall.Extensions.Distances.StopsFromCall }} stops away)</p>
                  <p v-else>{{ Math.floor((Date.parse(item.MonitoredCall.AimedArrivalTime)-Date.now())/60000) }} minutes (Expected at {{ toTime(item.MonitoredCall.AimedArrivalTime) }}, {{ item.MonitoredCall.Extensions.Distances.StopsFromCall }} stops away)</p>
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
      <Button icon="pi pi-heart" aria-label="favorite stop" @click="local.addFavorite(`${props.stop.name} (${busTimes[0].DestinationName})`, props.stop, 'bus')"/>
        </div>
    </div>
</template>
<script setup>
import Button from "primevue/button";
import {watchEffect, ref} from "vue";
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
  let match =  group.replace(/\s.*/, '');
  return element.filter((el) => el.PublishedLineName === match);
}

</script>
<style scoped>
.time{
  text-align: left;
}
</style>