<template>
    <div>
        <div class="card">
            <strong>{{ refreshTime.textContent }}</strong>
            <p v-for="item in busTimes">{{ item.textContent }}</p>
            <details>
        <summary>
          service alerts ({{ alerts.length }})
        </summary>
        <p v-for="alert in alerts">{{ alert.textContent }}</p>
      </details>
        </div>
    </div>
</template>
<script setup>
// v-bind:class = "(condition)?'class_if_is_true':'else_class'"
import {watchEffect} from "vue";
const props = defineProps({
  stop: Object,
});
console.log(props.stop.code);
const proxy = 'https://corsproxy.io/?';
let busTimes = [];
let refreshTime = '';
let alerts = [];
watchEffect(async() =>{
    let currentTime = Date.now();
    const timeUrl = `https://bustime.mta.info/m/index?q=${props.stop.code}&cacheBreaker=${currentTime}`;
    try{
        const response = await fetch(proxy+timeUrl, {cache: 'reload', headers: {"Access-Control-Max-Age": 0}}); // fetch site
        const data = await response.text();
        htmlData(data);
        if(response.status != 200){
            throw new Error(response.statusText);
        }
    } catch (error){
        console.log(error, "Error Fetching Buses");
    }
})
function htmlData(data){
    const parser = new DOMParser();
        const list = parser.parseFromString(data, "text/html");
        busTimes = list.querySelectorAll('.directionAtStop'); // parse fetched site
        refreshTime = list.querySelector('#refresh a strong');
    const busHeaders = document.querySelectorAll('p');
    busHeaders.forEach(function(item){
        if(item.innerText.includes('\u00A0') == true){
            item.className = "busHead";
        }
    });
      alerts = (list.querySelectorAll('.alerts li')).length;
    // alerts.forEach(item => document.getElementById("alerts"+instance).insertAdjacentHTML("beforeend", `<p>${item.textContent}</p>`));
    // console.log(document.getElementById("alerts"+instance));
    console.log(busTimes, refreshTime, alerts);
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
</style>