<script setup>
import SelectDirection from '@/components/SelectDirection.vue';
const props = defineProps({
  options: Array,
});
</script>
<template>
    <div>
        <select name="Select Bus" title="select bus route" class="bus">
          <option value="">select bus</option>
          <option v-for="option in options" :value="option.value">
          {{ option.name }}
          </option>
        </select>
    </div>
    <SelectDirection/>
</template>

<style scoped>
.bus{
    width: 49%;
}
</style>