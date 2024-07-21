<template>
    <h1>MTA Transit Comparison</h1>
    <Sidebar v-model:visible="visible" header="favorites">
    <Card v-for="item in local.local.favorites" style="background-color: rgb(10,10,10);">
       <template #title>{{ item.name }}</template>
       <template #content>
        <Button @click="local.removeFavorite(local.local.favorites.indexOf(item))" label="remove" severity="danger"/>
       </template>
    </Card>
</Sidebar>
    <MultiSelect :placeholder="'select stops'" display="chip" v-model="selected" :options="local.local.favorites" optionLabel="name" optionValue="code" class="w-full md:w-80"/>
    <Button label="Edit Favorites" @click="visible = true"/>
<div class="compare">
    <div v-for="select in selected" :id="`instance${selected.indexOf(select)}`" style="padding:0.5rem;">
      <BusTimes :stop="selected[selected.indexOf(select)].code" v-model="doneselect" :instance="selected.indexOf(select)" v-if="selected[selected.indexOf(select)].type === 'bus'"/>
      <TrainTimes :stop="selected[selected.indexOf(select)].code" v-model="doneselect" :instance="selected.indexOf(select)" v-if="selected[selected.indexOf(select)].type === 'train'"/>
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
}
</style>