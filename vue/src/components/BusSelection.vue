<script setup>
import {ref} from "vue";
const props = defineProps({
    options: Array,
});
const emit = defineEmits(['selectedbus']);
</script>
<template>
    <div>
        <select name="Select Bus" title="select bus route" class="bus" v-model="selectedbus">
          <option value="">select bus</option>
          <option v-for="option in options" :value="option.value">
          {{ option.name }}
          </option>
        </select>
    </div>
</template>
<style scoped>
.bus{
    width: 49%;
}
</style>