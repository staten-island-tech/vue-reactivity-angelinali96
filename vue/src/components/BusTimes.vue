<template>
    <div>
        <div class="card">
            <strong>refreshTime.textContent</strong>
            <p>item.textContent</p>
            <details>
        <summary>
          service alerts list.querySelectorAll('.alerts li').length
        </summary>
        <p>item.textContent</p>
      </details>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
  stop: String,
});
const proxy = 'https://corsproxy.io/?';

async function insertTime(instance){
    const currentTime = Date.now();
    const timeUrl = `https://bustime.mta.info/m/index?q=${props.stop}&cacheBreaker=${currentTime}`;
    try{
        const response = await fetch(proxy+timeUrl, {cache: 'reload', headers: {"Access-Control-Max-Age": 0}}); // fetch site
        const data = await response.text();
        htmlData(data, instance);
        if(response.status != 200){
            throw new Error(response.statusText);
        }
    } catch (error){
        console.log(error, "Error Fetching Buses");
    }
}
function htmlData(data, instance){
    const parser = new DOMParser();
        const list = parser.parseFromString(data, "text/html");
        const busTimes = list.querySelectorAll('.directionAtStop'); // parse fetched site
        const refreshTime = list.querySelector('#refresh a strong');
        DOMSelect.timeRes[instance].innerHTML = `<strong>${refreshTime.textContent}</strong>`;
        busTimes.forEach(function(item){
            item.childNodes.forEach(function(item){
                DOMSelect.timeRes[instance].insertAdjacentHTML("beforeend", `<p>${item.textContent}</p>`);
            });
        });
    const busHeaders = document.querySelectorAll('p');
    busHeaders.forEach(function(item){
        if(item.innerText.includes('\u00A0') == true){
            item.className = "busHead";
        }
    });
        DOMSelect.timeRes[instance].insertAdjacentHTML("beforeend", `<details id="alerts${instance}">
        <summary>
          service alerts (${list.querySelectorAll('.alerts li').length})
        </summary>
        
      </details>`);
    list.querySelectorAll('.alerts li').forEach(item => document.getElementById("alerts"+instance).insertAdjacentHTML("beforeend", `<p>${item.textContent}</p>`));
    console.log(document.getElementById("alerts"+instance));
    }
</script>
<style scoped>

</style>