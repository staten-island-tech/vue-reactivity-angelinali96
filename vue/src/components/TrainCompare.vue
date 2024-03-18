<template>
    <div class="train">
          <TrainSelection @select-input="receiveData" :instance="instance"/>
          <Dropdown :key="componentKey" aria-label="select stop from direction 1" v-model="selectedstop" filter checkmark placeholder="🔍 stop selection" :options="trainstops" optionLabel="name"/>
          <TrainTimes :stop="selectedstop"/>
          </div>
  </template>
  <script setup>
  import {reactive, watchEffect, ref} from "vue";
  import TrainSelection from '@/components/TrainSelection.vue';
  import TrainTimes from '@/components/TrainTimes.vue';
  import Dropdown from 'primevue/dropdown';
  const props = defineProps({
    instance: String, // receives instance to distinguish sides to compare otherwise the props will be the same for both which will defeat the point of making this site
  });
  const emits = defineEmits(['select-input']); // receives input from selected train
  const proxy = 'https://corsproxy.io/?';
// subwaystats.com
// https://collector-otp-prod.camsys-apps.com/schedule/MTASBWY/stopsForRoute?routeId=MTASBWY:A
  const selectedstop = ref({name: '🔍 stop selection', code: '🔍 stop selection'}); // v model var for selected stop input
  let selectedtrain = reactive({}); // variable for current selected train
  function receiveData(id){
        // console.log(id);
        selectedtrain.name = id; // receives emit and sets object equal to emit value
      }
  
  const componentKey = ref(0);
  const forceRerender = () => { // force a component rerender to avoid having to change state of checkbox to show name of directions
    componentKey.value += 1;
  };
  let trainstops = ref([]);
  watchEffect(async() => { // fetch both stops api for both arrays and display conditionally
      try{
          const stopsApi = `https://collector-otp-prod.camsys-apps.com/schedule/MTASBWY/stopsForRoute?routeId=MTASBWY:${selectedtrain.name.name}`;
          const response = await fetch(encodeURI(stopsApi));
          const data = await response.json();
          trainstops = [];
          data.forEach(element => { // push stops into array
          let stopInfo = {};
          stopInfo.name = element.stopName;
          stopInfo.code = element.stopId; // change
          trainstops.push(stopInfo);
          });
          forceRerender();
          console.log(trainstops);
          if(response.status != 200){
              throw new Error(response.statusText);
          }
      } catch (error){
          console.log(error, "API Error");
      }
  })
  </script>
  <style scoped>
  .train{
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