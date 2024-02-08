<script setup>
import SelectDirection from '@/components/SelectDirection.vue';
import {ref} from "vue";
const proxy = 'https://corsproxy.io/?'; 
const routesApi = 'https://bustime.mta.info/routes/';

const busesList = []; // pulls from api and list of buses will be stored here
async function getOptions(){
    try{
        const response = await fetch(proxy+routesApi); // fetch site
        const data = await response.text();
        fetchToHtml(data);
        if(response.status != 200){
            throw new Error(response.statusText);
        }
    } catch (error){
        console.log(error, "Error Fetching Buses");
    }
}
getOptions();

function fetchToHtml(data){
    const parser = new DOMParser();
        const list = parser.parseFromString(data, "text/html");
        const busList = list.querySelectorAll('ul.routeList li'); // parse fetched site
        busList.forEach(item => optionList(item)); // for each parsed node
    }
// display results from options
function optionList(res){
    let list = res.querySelector('a').href.split("#", 2);
    let busInfo = {};
    busInfo.name = res.innerText;
    busInfo.value = list[1];
    busesList.push(busInfo);
}
const options = ref(busesList);
</script>
<template>
    <div>
        <select name="Select Bus" title="select bus route" class="bus">
          <option value="">select bus</option>
          <option v-for="option in options" :value="option.value">
          {{ option.name }}
          </option>
        </select>
      <SelectDirection/>
    </div>
</template>

<style scoped>
.bus{
    width: 49%;
}
</style>