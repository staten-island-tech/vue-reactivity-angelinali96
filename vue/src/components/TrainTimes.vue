<template>
    <div>
        <div class="card" :key="componentKey">
            <strong>{{ refreshTime.textContent }}</strong>
            <button class="refresh" @click="getTrainTime()">refresh ⟳</button>
            <p v-for="item in trainTimes" v-bind:class="item.includes(' - ') ? 'trainsHead' : 'time'">{{ item }}</p>
            <details>
        <summary>
          service alerts ({{ alerts.length }})
        </summary>
        <div v-for="alert in alerts" class="time">
          <p class="trainHead">{{ alert.humanReadableActivePeriod }}</p>
          <p>{{ alert.alertDescriptionText }}</p>
        </div>
      </details>
        </div>
    </div>
</template>
<script setup>
import {watchEffect, ref} from "vue";
const props = defineProps({
  stop: Object,
});
const componentKey = ref(0); // force component to refresh bc idk why it wasnt refreshing
const forceRerender = () => {
  componentKey.value += 1;
};
const proxy = 'https://corsproxy.io/?';
let trainTimes = ref([]); // store the content that will be pushed into html
let refreshTime = ref('');
let alerts = ref([]);
async function getTrainTime(){ // fetch api
  // let currentTime = Date.now(); &cacheBreaker=${currentTime}
    const timeUrl = `https://otp-mta-prod.camsys-apps.com/otp/routers/default/nearby?stops=${props.stop.code}&apikey=Z276E3rCeTzOQEoBPPN4JCEc6GfvdnYE`;
    try{
        const response = await fetch(encodeURI(timeUrl), {cache: 'reload', headers: {"Access-Control-Max-Age": 0}}); // fetch site
        const data = await response.json();
        let trainTimeContainers = data[0].groups;
        refreshTime = data[0].groups[0].time[0].timestamp;
        trainTimes = [];
        trainTimeContainers.forEach(function(item){
          trainTimes.push(item.route.shortName +' - '+ item.headsign);
          item.times.forEach(function(item){
            trainTimes.push(Number(item.serviceDay) + Number(item.realtimeArrival));
          });
        });
        alerts = data[0].alerts;
        forceRerender();
        console.log(trainTimes);
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
.card{
    padding: 0.5rem;
    background-color: #1a0035;
    margin: 0.5rem 0;
    width: 40vw;
    height: auto;
    text-align: center;
    align-items: center;
    border-radius: 15px;
    box-sizing: border-box;
    box-shadow: 5px 5px 0px rgba(48, 48, 48, 0.5);
    color: white;
}
summary{
  font-size: var(--h5);
  color: rgb(250, 215, 215);
}
button[class="refresh"]{
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.5rem;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  transition: border-color 0.25s;
  margin: 0.5rem 0;
  width: 14vw;
  background-color: rgb(107, 0, 0);
  color: white;
}
.trainHead{
  font-weight: bolder;
  font-size: 1rem;
}
.time{
  text-align: left;
}
</style>