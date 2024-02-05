<template>
    <div>
        <h2>{{ destination.name }}</h2>
        <img :src="destination.img" alt=""/>
        <h3>{{ clicked }}</h3>
        <button @click="increment">click</button>
    </div>
</template>

<script setup>
import {ref} from "vue";
const props = defineProps({ // data expected to be received
    destination: Object
})
// clicker logic
const clicked = ref(0); // ref is number that can change
function increment(){
    clicked.value++;
}
</script>

<style scoped>
h1{
    color: red;
}
img{
    width: 250px;
    object-fit: cover;
}
</style>