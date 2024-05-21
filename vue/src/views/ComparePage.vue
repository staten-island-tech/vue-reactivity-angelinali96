<template>
    <h1>compare selection</h1>
  <div class="compare">
    <div id="instance0">
      <SelectButton v-model="selection0" :options="['bus', 'train']"></SelectButton>
      <BusCompare instance="0" v-if="selection0 === 'bus'"/>
      <TrainCompare instance="0" v-if="selection0 === 'train'"/>
    </div>
    <div id="instance1">
      <SelectButton v-model="selection1" :options="['bus', 'train']"></SelectButton>
      <BusCompare instance="1" v-if="selection1 === 'bus'"/>
      <TrainCompare instance="1" v-if="selection1 === 'train'"/>
    </div>
<ScrollTop />
  </div>
</template>
<script setup>
import BusCompare from '@/components/BusCompare.vue';
import TrainCompare from '@/components/TrainCompare.vue';
import SelectButton from 'primevue/selectbutton';
import ScrollTop from 'primevue/scrolltop';
import { ref } from 'vue';

// define selection variables
const selection0 = ref('');
const selection1 = ref('');

</script>
<style scoped>
.compare{
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 100%;
}
</style>