<template>
    <h1>compare a train and bus</h1>
    <div class="trainbus">
        <TrainCompare instance="0"/>
        <BusCompare instance="1"/>
        <ScrollTop />
    </div>
</template>

<script setup>
import BusCompare from '@/components/BusCompare.vue';
import TrainCompare from '@/components/TrainCompare.vue';
import ScrollTop from 'primevue/scrolltop';
</script>

<style scoped>
.trainbus{
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 100%;
}
</style>