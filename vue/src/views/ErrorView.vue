<template>
    <div style="display: flex; flex-direction: column; align-items: center;">
        <Divider>
<h1>Page not found</h1>
</Divider>
<Card style="width: 25rem; align-items: center; align-content: center;">
    <template #title><span style="font-weight: 700;font-size: 8rem;">404</span></template>
<template #content><RouterLink to="/">
    <Button label="Go back to home" />
</RouterLink></template>
</Card>
</div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import Button from 'primevue/button';
import Divider from 'primevue/divider';
import Card from 'primevue/card';
</script>

<style scoped>

</style>