<script setup>

</script>
<template>
    <div>
        <form action="submit" id="busSubmit">
        <select name="Select Bus" title="select bus route">
          <option value="">select bus</option>
        </select>
        <select name="Select Direction" class="direction" title="select bus direction">
          <option value="">select direction</option>
        </select>
        <input type="submit" value="submit">
      </form>
    </div>
</template>

<script>
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
        busesList.forEach(item => insertBuses(item));
    }
// display results from options
function optionList(res){
    let list = res.querySelector('a').href.split("#", 2);
    let busInfo = {};
    busInfo.name = res.innerText;
    busInfo.value = list[1];
    busesList.push(busInfo);
}
function insertBuses(list){
  document.querySelector('select').insertAdjacentHTML("beforeend", `
    <option value="${list.value}">${list.name}</option>
    ` //insert bus routes in 1
    );
}

</script>

<style scoped>

</style>