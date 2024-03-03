<template>
    <div>
        <select name="Select Bus" title="select bus route" v-on:input="selectInput()">
          <option value="">select bus</option>
          <option v-for="option in busesList" :value="option.code">
          {{ option.name }}
          </option>
        </select>
    </div>
</template>
<script setup>
import { busesList } from '@/stores/busesList';
const props = defineProps({
    instance: String,
});
const emit = defineEmits(['select-input']);
function selectInput(){
        emit('select-input', document.querySelectorAll('select')[props.instance].value);
        }
</script>
<style scoped>
select{
    width: 40vw;
}
</style>