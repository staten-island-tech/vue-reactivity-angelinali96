<script setup>
import BusCompare from '@/components/BusCompare.vue';

</script>

<template>
  <div class="busbus">
<BusCompare instance="1" />
<!--<BusCompare instance="2" />-->
  </div>
</template>

<style scoped>
.busbus{
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.busCompare{
  width: 49%;
}
</style>