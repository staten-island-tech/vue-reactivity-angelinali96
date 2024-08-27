<template>
    <div class="train">
      <Accordion :active-index="doneselect">
    <AccordionTab :header="selectedstop.name">
          <TrainSelection @select-input="receiveData" :instance="instance"/>
          <Dropdown :key="componentKey" aria-label="select stop from direction 1" v-model="selectedstop" filter checkmark placeholder="🔍 stop selection" :options="trainstops" optionLabel="name"/>
        </AccordionTab>
      </Accordion>
          <TrainTimes :stop="selectedstop" v-model="doneselect" v-if="componentKey > 0"/>
          </div>
  </template>
  <script setup>
  import {reactive, watchEffect, ref} from "vue";
  import TrainSelection from '@/components/TrainSelection.vue';
  import TrainTimes from '@/components/TrainTimes.vue';
  import Dropdown from 'primevue/dropdown';
  import Accordion from "primevue/accordion";
  import AccordionTab from "primevue/accordiontab";
  import loading from "@/stores/loadingVar";
  import error from "@/stores/errorVar";
  const props = defineProps({
    instance: String, // receives instance to distinguish sides to compare otherwise the props will be the same for both which will defeat the point of making this site
  });
  const emits = defineEmits(['select-input']); // receives input from selected train
  const selectedstop = ref({name: '🔍 stop selection', code: '🔍 stop selection'}); // v model var for selected stop input
  let selectedtrain = reactive({}); // variable for current selected train
  function receiveData(id){
        selectedtrain.name = id; // receives emit and sets object equal to emit value
      }
  let doneselect = ref(0);
  const componentKey = ref(0);
  const forceRerender = () => { // force a component rerender to avoid having to change state of checkbox to show name of directions
    componentKey.value += 1;
  };
  let trainstops = ref([]);
  watchEffect(async() => { // fetch both stops api for both arrays and display conditionally
      try{
          const stopsApi = `https://collector-otp-prod.camsys-apps.com/schedule/MTASBWY/stopsForRoute?routeId=MTASBWY:${selectedtrain.name.code}`;
          loading.value = true;
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
          loading.value = false;
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
  [data-pc-name='dropdown']{
    width: 40vw;
  }
  </style>