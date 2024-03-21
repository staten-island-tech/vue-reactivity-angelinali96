<template>
    <h1>compare 2 trains</h1>
    <div class="traintrain">
        <TrainCompare instance="0"/>
        <TrainCompare instance="1"/>
        <ScrollTop />
    </div>
</template>

<script setup>
import TrainCompare from '@/components/TrainCompare.vue';
import ScrollTop from 'primevue/scrolltop';
</script>

<style scoped>
.traintrain{
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 100%;
}
</style>