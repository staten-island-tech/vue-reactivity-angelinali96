<template>
    <h1>MTA Transit Comparison</h1>
    <Sidebar v-model:visible="visible" header="favorites">
    <Card v-for="item in local.local.favorites" style="background-color: rgb(10,10,10);">
       <template #title>{{ item.name }}</template>
       <template #content>
        <Button icon="pi pi-trash" @click="local.removeFavorite(local.local.favorites.indexOf(item))" label="remove" severity="danger"/>
       </template>
    </Card>
</Sidebar>
    <MultiSelect :maxSelectedLabels="0" :placeholder="'select stops'" v-model="selected" :options="local.local.favorites" optionLabel="name" optionValue="code" class="w-full md:w-80"/>
    <Button label="Edit Favorites" @click="visible = true" icon="pi pi-pen-to-square"/>
<div class="compare">
    <div v-for="select in selected" :id="`instance${selected.indexOf(select)}`" style="padding:0.5rem; width: 42vw;">
      <p style="text-align: center; font-size: 1rem;">{{ select.code.name }}</p>
      <BusTimes :stop="select.code" v-model="doneselect" :instance="selected.indexOf(select)" v-if="select.type === 'bus'"/>
      <TrainTimes :stop="select.code" v-model="doneselect" :instance="selected.indexOf(select)" v-if="select.type === 'train'"/>
    </div>
</div>
</template>

<script setup>
import { ref } from 'vue';
import MultiSelect from 'primevue/multiselect';
import Button from 'primevue/button';
import Sidebar from 'primevue/sidebar';
import Card from 'primevue/card';
import BusTimes from '@/components/BusTimes.vue';
import TrainTimes from '@/components/TrainTimes.vue';
import { localStore } from '@/stores/local';
const local = localStore();
const selected = ref([]);
let doneselect = ref(0);
const visible = ref(false);
</script>

<style scoped>
h1{
    font-size:2rem;
    text-align: center;
    font-family: "Inconsolata", monospace;
    font-weight: bolder;
}
.compare{
  display: flex;
  justify-content: space-around;
  overflow-x: auto;
  overflow-y: hidden;
  max-width: 100%;
  width: 100%;
}
</style>