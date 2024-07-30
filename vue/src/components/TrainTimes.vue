<template>
    <div>
        <div class="card" :key="componentKey">
            <Button @click="getTrainTime()" aria-label="refresh ⟳" icon="pi pi-refresh" severity="danger" style="margin-right: 0.3rem;"/>
            <strong>refreshed {{ toTime(refreshTime) }}</strong>
            <details open v-for="item in trainTimes">
            <summary class="trainHead">{{ item.trainName }}</summary>
            <ol class="times">
            <li v-for="time in item.times">{{ Math.floor((time-Date.now())/60000) }} minutes (arrives {{ toTime(time) }})</li>
            </ol>
          </details>
            <details v-if="alerts.length > 0">
        <summary class="alerts">
          service alerts ({{ alerts.length }})
        </summary>
        <div v-for="alert in alerts" class="time">
          <p class="trainHead">{{ alert.humanReadableActivePeriod }}</p>
          <p>{{ alert.alertHeaderText }}</p>
          <details>
            <!-- <p v-for="line in (alert.alertDescriptionText)">{{ line }}</p> -->
             <p style="white-space: pre-wrap;">{{ alert.alertDescriptionText }}</p>
          </details>
        </div>
      </details>
      <Button icon="pi pi-heart" aria-label="favorite stop" @click="local.addFavorite(`${props.stop.name} (${trainNums.toString()})`, props.stop, 'train')"/>
        </div>
    </div>
</template>
<script setup>
import Button from "primevue/button";
import {watchEffect, ref} from "vue";
import loading from "@/stores/loadingVar";
import error from "@/stores/errorVar";
import { toTime } from "@/stores/functions";
import { localStore } from "@/stores/local";
const local = localStore();
const props = defineProps({
  stop: Object,
});
const model = defineModel();
const componentKey = ref(0); // force component to refresh bc idk why it wasnt refreshing
const forceRerender = () => {
  componentKey.value += 1;
};
let trainTimes = ref([]); // store the content that will be pushed into html
let refreshTime = ref(0);
let alerts = ref([]);
let trainNums = ref([]);

function removeDupes(data){
  return data.filter((value, index)=> data.indexOf(value) === index)
}

async function getTrainTime(){ // fetch api
  // let currentTime = Date.now(); &cacheBreaker=${currentTime}
  if(props.stop.code === '🔍 stop selection'){
    return;
  }
    const timeUrl = `https://otp-mta-prod.camsys-apps.com/otp/routers/default/nearby?stops=${props.stop.code}&apikey=Z276E3rCeTzOQEoBPPN4JCEc6GfvdnYE`;
    try{
        loading.value = true;
        const response = await fetch(encodeURI(timeUrl), {cache: 'reload', headers: {"Access-Control-Max-Age": 0}}); // fetch site
        const data = await response.json();
        let trainTimeContainers = data[0].groups;
        alerts = data[0].alerts;
        refreshTime = (data[0].groups[0].times[0].timestamp)*1000;
        trainTimes = [];
        trainNums.value = [];
        trainTimeContainers.forEach(function(item){
          trainNums.value.push(item.route.shortName)
          const group = {};
          group.trainName = item.route.shortName +' - '+ item.headsign;
          group.times = [];
          item.times.forEach(function(item){
            group.times.push((item.serviceDay + item.realtimeArrival)*1000);
          });
          trainTimes.push(group);
        });
        trainNums.value = removeDupes(trainNums.value)
        console.log(trainNums.value)
        if(props.stop.code != '🔍 stop selection'){
          model.value++;
        }
        forceRerender();
        loading.value = false;
        if(response.status != 200){
            throw new Error(response.statusText);
        }
    } catch (error){
        console.log(error, "Error Fetching Trains");
    }
}
watchEffect(async() =>{getTrainTime()});

</script>
<style scoped>
.time{
  text-align: left;
}
</style>