<script setup>
import {reactive} from "vue";
import BusSelection from '@/components/BusSelection.vue';
import SelectDirection from '@/components/SelectDirection.vue';
const props = defineProps({
  options: Array,
});
const emits = defineEmits(['select-input']);
let selectedbus = reactive({busId: "Select Bus"});
function receiveData(id){
      // console.log(id);
      selectedbus.busId = id;
      console.log(selectedbus.busId);
    }
</script>
<template>
    <div>
        <BusSelection :options="options" @select-input="receiveData"/>
        <p>{{ selectedbus.busId }}</p>
        <SelectDirection v-if="selectedbus.busId != 'Select Bus'"/>
    </div>
</template>

<style scoped>

</style>