<template>
  <div>
    <h1>MTA Transit Comparison</h1>
      <p class="subhead">made for those who need to check multiple buses/trains.</p>
      <md-block src="https://raw.githubusercontent.com/staten-island-tech/vue-reactivity-angelinali96/main/README.md"></md-block>
      <Button @click="dialog = true" severity="danger">Clear Data</Button>
    <Dialog v-model:visible="dialog">
      <p>Are you sure you want to clear your data?</p>
      <Button @click="{local.clearUser(); dialog = false;}" severity="danger">Yes</Button>
    </Dialog>
  </div>
</template>

<script setup>
import {MarkdownBlock, MarkdownSpan, MarkdownElement} from "md-block";
import { ref } from "vue";
import Button from "primevue/button";
import Dialog from "primevue/dialog";
import { localStore } from '../stores/local';
const local = localStore();
const dialog = ref(false);
</script>

<style scoped>
h1{
    font-size:3rem;
    text-align: center;
    font-family: "Inconsolata", monospace;
    font-weight: bolder;
}
.subhead{
  font-size: 1.5rem;
  text-align: center;
}
</style>

