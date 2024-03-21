<template>
    <h1>compare 2 buses</h1>
  <div class="busbus">
<BusCompare instance="0"/>
<BusCompare instance="1"/>
<ScrollTop />
  </div>
</template>
<script setup>
import BusCompare from '@/components/BusCompare.vue';
import ScrollTop from 'primevue/scrolltop';
</script>
<style scoped>
.busbus{
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 100%;
}
</style>