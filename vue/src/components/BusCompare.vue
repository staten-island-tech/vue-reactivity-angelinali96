<script setup>
import BusSelection from '@/components/BusSelection.vue';

const props = defineProps({
  options: Array,
});
</script>
<template>
    <div>
        <BusSelection :options="options"/>
    </div>
</template>

<style scoped>

</style>