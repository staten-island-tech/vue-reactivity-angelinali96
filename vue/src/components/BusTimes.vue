<template>
    <div>
        <div class="card" :key="componentKey">
            <strong>{{ refreshTime.textContent }}</strong>
            <button class="refresh" @click="getBusTime()">refresh ⟳</button>
            <p v-for="item in busTimes" v-bind:class="item.innerText.includes('\u00A0') ? 'busHead' : 'time'">{{ item.textContent }}</p>
            <details>
        <summary>
          service alerts ({{ alerts.length }})
        </summary>
        <p v-for="alert in alerts" class="time">{{ alert.textContent }}</p>
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
let busTimes = ref([]); // store the content taht will be pushed into html
let refreshTime = ref('');
let alerts = ref([]);
async function getBusTime(){ // fetch api
  let currentTime = Date.now();
    const timeUrl = `https://bustime.mta.info/m/index?q=${props.stop.code}&cacheBreaker=${currentTime}`;
    try{
        const response = await fetch(proxy+timeUrl, {cache: 'reload', headers: {"Access-Control-Max-Age": 0}}); // fetch site
        const data = await response.text();
        htmlDataTime(data);
        forceRerender();
        if(response.status != 200){
            throw new Error(response.statusText);
        }
    } catch (error){
        console.log(error, "Error Fetching Buses");
    }
}
watchEffect(async() =>{getBusTime()});
function htmlDataTime(data){
    const parser = new DOMParser();
        const list = parser.parseFromString(data, "text/html");
        const busTimeContainers = list.querySelectorAll('.directionAtStop'); // parse fetched site
        busTimes = [];
        busTimeContainers.forEach(function(item){
            item.childNodes.forEach(function(item){
                busTimes.push(item);
            });
        });
        refreshTime = list.querySelector('#refresh a strong');
      alerts = (list.querySelectorAll('.alerts li'));
    }
  
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
.busHead{
  font-weight: bolder;
  font-size: 1rem;
}
.time{
  text-align: left;
}
</style>