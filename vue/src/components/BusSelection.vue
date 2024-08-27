<template>
    <div>
        <Dropdown v-model="selectedbus" :aria-label="'select bus '+instance" filter checkmark placeholder="🔍 bus selection" :options="busesList" optionLabel="name" optionValue="code"/>
    </div>
</template>
<script setup>
import { ref, watch } from 'vue';
import { busesList } from '@/stores/busesList';
import Dropdown from 'primevue/dropdown';
const props = defineProps({
    instance: String,
});
const selectedbus = ref({});
const emit = defineEmits(['select-input']); // emit variable to buscompare component
watch(selectedbus, async() => selectInput());
function selectInput(){
        emit('select-input', selectedbus);
        }
</script>
<style scoped>
[data-pc-name="dropdown"]{
    width: 40vw;
}
</style>