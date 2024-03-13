<template>
    <div class="train">
          <TrainSelection @select-input="receiveData" :instance="instance"/>
          <Dropdown aria-label="select stop from direction 1" v-model="selectedstop" editable checkmark placeholder="🔍 stop selection" :options="busstops1" optionLabel="name"/>
          <TrainTimes :stop="selectedstop"/>
          </div>
  </template>
  <script setup>
  import {reactive, watchEffect, ref} from "vue";
  import TrainSelection from '@/components/TrainSelection.vue';
  import BusTimes from '@/components/TrainTimes.vue';
  import Dropdown from 'primevue/dropdown';
  const props = defineProps({
    instance: String, // receives instance to distinguish sides to compare otherwise the props will be the same for both which will defeat the point of making this site
  });
  const emits = defineEmits(['select-input']); // receives input from selected bus
  const proxy = 'https://corsproxy.io/?';
// subwaystats.com
  const selecteddirection = ref(false);
  const selectedstop = ref({name: '🔍 stop selection', code: '🔍 stop selection'}); // v model var for selected stop input
  let selectedtrain = reactive({}); // variable for current selected bus
  function receiveData(id){
        // console.log(id);
        selectedtrain.name = id; // receives emit and sets object equal to emit value
      }
  
  const componentKey = ref(0);
  const forceRerender = () => { // force a component rerender to avoid having to change state of checkbox to show name of directions
    componentKey.value += 1;
  };
  
  watchEffect(async() => { // fetch both stops api for both arrays and display conditionally
      try{
          const stopsApi = `https://bustime.mta.info/api/stops-on-route-for-direction?routeId=MTA+NYCT_${selectedbus.name.replace(/\-SBS/, '%2B')}&directionId=`;
          const response0 = await fetch(proxy+encodeURI(stopsApi+0));
          const response1 = await fetch(proxy+encodeURI(stopsApi+1));
          const data0 = await response0.json();
          const data1 = await response1.json();
          busstops0 = [];
          busstops1 = [];
          data0.stops.forEach(element => { // push stops into array
          let stopInfo = {};
          stopInfo.name = element.name;
          stopInfo.code = element.id.replace('MTA_', '');
          busstops0.push(stopInfo);
          });
          data1.stops.forEach(element => {
          let stopInfo = {};
          stopInfo.name = element.name;
          stopInfo.code = element.id.replace('MTA_', '');
          busstops1.push(stopInfo);
          });
          if(response0.status != 200 || response1.status != 200){
              throw new Error(response0.statusText, response1.statusText);
          }
      } catch (error){
          console.log(error, "API Error");
      }
  })
  </script>
  <style scoped>
  .bus{
    width: 49%;
  }
  .switch{
    width: fit-content;
    display: flex;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  [data-pc-name='dropdown']{
    width: 40vw;
  }
  </style>