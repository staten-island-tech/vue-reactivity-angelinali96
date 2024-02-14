<script setup>
import {ref} from "vue";
const props = defineProps({
    options: Array,
});
const emit = defineEmits(['select-input']);
</script>
<template>
    <div>
        <select name="Select Bus" title="select bus route" class="bus" v-on:input="selectInput">
          <option value="">select bus</option>
          <option v-for="option in options" :value="option.value">
          {{ option.name }}
          </option>
        </select>
    </div>
</template>
<script>
export default {
    methods: {
        selectInput(){
        this.$emit('select-input', document.querySelector('select').value);
        }
    }
};
</script>
<style scoped>
.bus{
    width: 49%;
}
</style>