<template>
    <div>
        <Dropdown v-model="selectedtrain" :aria-label="'select train '+instance" filter checkmark placeholder="🔍 train selection" :options="trainsList">
            <template #value="slotProps">
                <div class="flex align-items-center">
                    <img :alt="slotProps.value.name" :src="slotProps.value.image"/>
                </div>
            </template>
            <template #option="slotProps">
                <div class="flex align-items-center">
                    <img :alt="slotProps.option.name" :src="slotProps.option.image"/>
                    {{ slotProps.option.name }}
                </div>
            </template>
        </Dropdown>
    </div>
</template>
<script setup>
import { ref, watch } from 'vue';
import { trainsList } from '@/stores/trainsList';
import Dropdown from 'primevue/dropdown';
const props = defineProps({
    instance: String,
});
const selectedtrain = ref({});
const emit = defineEmits(['select-input']); // emit variable to buscompare component
watch(selectedtrain, async() => selectInput());
function selectInput(){
        emit('select-input', selectedtrain);
        }
</script>
<style scoped>
select{
    width: 40vw;
}
</style>