<script setup>
import BusSelection from '@/components/BusSelection.vue';
import SelectDirection from '@/components/SelectDirection.vue';
const props = defineProps({
  options: Array,
});
const emits = defineEmits(['select-input']);
function receiveData(id){
      console.log(id);
    }
</script>
<template>
    <div>
        <BusSelection :options="options" @select-input="receiveData"/>
        <SelectDirection/>
    </div>
</template>
<style scoped>

</style>