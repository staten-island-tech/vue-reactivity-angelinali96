<template>
    <h1>compare 2 buses</h1>
  <div class="busbus">
<BusCompare :options="options" instance="0"/>
<BusCompare :options="options" instance="1"/>
  </div>
</template>
<script setup>
import BusCompare from '@/components/BusCompare.vue';

</script>
<style scoped>
.busbus{
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 100%;
}
</style>