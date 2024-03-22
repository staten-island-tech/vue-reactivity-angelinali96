<template>
  <div class="bus">
    <Accordion :active-index="doneselect">
    <AccordionTab :header="'bus '+instance">
        <BusSelection @select-input="receiveData" :instance="instance"/>
        <div :key="componentKey">
        <TabView>
    <TabPanel :header="directions[0]">
        <Dropdown aria-label="select stop from direction 1" v-model="selectedstop" filter checkmark placeholder="🔍 stop selection" :options="busstops0" optionLabel="name"/>
    </TabPanel>
    <TabPanel :header="directions[1]">
        <Dropdown aria-label="select stop from direction 2" v-model="selectedstop" filter checkmark placeholder="🔍 stop selection" :options="busstops1" optionLabel="name"/>
    </TabPanel>
</TabView>
        </div>
        </AccordionTab>
      </Accordion>
        <BusTimes :stop="selectedstop" v-model="doneselect"/>
        </div>
</template>
<script setup>
import {reactive, watchEffect, ref} from "vue";
import BusSelection from '@/components/BusSelection.vue';
import BusTimes from '@/components/BusTimes.vue';
import Dropdown from 'primevue/dropdown';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
const props = defineProps({
  instance: String, // receives instance to distinguish sides to compare otherwise the props will be the same for both which will defeat the point of making this site
});
const emits = defineEmits(['select-input']); // receives input from selected bus
const proxy = 'https://corsproxy.io/?';
const selectedstop = ref({name: '🔍 stop selection', code: '🔍 stop selection'}); // v model var for selected stop input
let selectedbus = reactive({}); // variable for current selected bus
let doneselect = ref(0);
function receiveData(id){
      // console.log(id);
      selectedbus.name = id; // receives emit and sets object equal to emit value
    }

let directions = reactive(['direction 1', 'direction 2']); // stores the two directions the bus can go in
const componentKey = ref(0);
const forceRerender = () => { // force a component rerender to avoid having to change state of checkbox to show name of directions
  componentKey.value += 1;
};
watchEffect(async() => { // fetch stop directions api
    try{
        const direction = `https://bt.mta.info/api/search?q=${selectedbus.name}`;
        const response = await fetch(proxy+direction);
        const data = await response.json();
        let directionsResult = (data.searchResults.matches[0].directions).sort(sortDirection);
        directions = [];
        directions.push(directionsResult[0].destination);
        directions.push(directionsResult[1].destination);
        forceRerender();
        if(response.status != 200){
            throw new Error(response.statusText);
        }
    } catch (error){
        console.log(error, "API Error");
    }
});
function sortDirection(a, b) {
  return Number(a.directionId) - Number(b.directionId); // make sure the directions are arranged by id 0 and 1 to match with true false val of checkbox
}
let busstops0 = ref([]); // store stops list for this direction
let busstops1 = ref([]);
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
        forceRerender();
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
[data-pc-name='dropdown'],
.p-tabview,
.p-tabview-panels,
.p-tabview-panel{
  width: 40vw;
}
</style>