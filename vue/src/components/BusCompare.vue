<template>
    <div :class="instance">
        <BusSelection :options="options" @select-input="receiveData" :instance="instance"/>
        <SelectDirection :busdirections="directions"/>
    </div>
</template>
<script setup>
import {reactive, watchEffect} from "vue";
import BusSelection from '@/components/BusSelection.vue';
import SelectDirection from '@/components/SelectDirection.vue';
const props = defineProps({
  options: Array,
  instance: String,
});
const emits = defineEmits(['select-input']);
let selectedbus = reactive({busId: "Select Bus", instance: props.instance});
function receiveData(id){
      // console.log(id);
      selectedbus.busId = id;
    }

let directions = reactive([]);
watchEffect(async() => { // fetch stops api
    try{
        const proxy = 'https://corsproxy.io/?';
        const direction = `https://bt.mta.info/api/search?q=${selectedbus.busId}`;
        const response = await fetch(proxy+direction);
        const data = await response.json();
        let directionsResult = (data.searchResults.matches[0].directions).sort(sortDirection);
        directions = [];
        directions.push(directionsResult[0].destination);
        directions.push(directionsResult[1].destination);
        console.log(directions);
        if(response.status != 200){
            throw new Error(response.statusText);
        }
    } catch (error){
        console.log(error, "API Error");
    }
});
function sortDirection(a, b) {
  return Number(a.directionId) - Number(b.directionId);
}
</script>
<style scoped>
.instance{
  width: 45%;
}
</style>