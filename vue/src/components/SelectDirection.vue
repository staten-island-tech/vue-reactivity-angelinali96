<script setup>
import { reactive } from 'vue';

const props = defineProps({
  busId: String,
});
const directions = reactive([
          {
            name: "",
            id: "",
          },
          {
            name: "",
            id: "",
          }
        ]);
async function busDirection(bus){ // fetch stops api
    try{
        const proxy = 'https://corsproxy.io/?';
        const direction = `https://bt.mta.info/api/search?q=${bus}`;
        const response = await fetch(proxy+direction);
        const data = await response.json();
        const results = data.searchResults.matches[0].directions;
        directions[0].name = results[0].destination;
        directions[0].id = results[0].directionId;
        directions[1].name = results[1].destination;
        directions[1].id = results[1].directionId;
        console.log(directions);
        if(response.status != 200){
            throw new Error(response.statusText);
        }
    } catch (error){
        console.log(error, "API Error");
    }
}
</script>
<template>
<div>
  <div class="themer">
        <h3>{{directions[0].name}}</h3>
      <label class="switch">
        <input type="checkbox">
        <span class="slider round"></span>
      </label>
      <h3>rainbow mode</h3>
      </div>
</div>
  </template>

<style scoped>
.themer{
    display: flex;
    align-content: center;
    text-align: center;
    justify-content: center;
  }
.switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }
  
  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #2e2e2e;
    -webkit-transition: .4s;
    transition: .4s;
  }
  
  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }
  
  input:checked + .slider {
    background-image: linear-gradient(var(--rainbow));
  }
  
  input:focus + .slider {
    box-shadow: 0 0 1px #1a1a1a;
  }
  
  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
  
  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }
  
  .slider.round:before {
    border-radius: 50%;
  }
</style>