<template>
<div>
  <div class="direction">
      <label class="switch" for="select direction">
        <input type="checkbox" v-model="model" name="select direction">
        <label for="select direction" :data-on="directions[1]" :data-off="directions[0]" class="switch-inner"></label>
      </label>
      </div>
</div>
  </template>
<script setup>
const model = defineModel();
const props = defineProps({
  directions: Array,
})
</script>
<style scoped>

div.direction{
    display: table-cell;
    vertical-align: middle;
    text-align: center;
}

label {
    font-size: calc(4%*2vw);
    color: #424242;
    font-weight: 500;
}

.switch{
    display: inline-block;
    margin: 0px;
    position: relative;
}

.switch > label.switch-inner{
    margin: 0px;
    width: 40vw;
    height: 30px;
    background: #E0E0E0;
    border-radius: 26px;
    overflow: hidden;
    position: relative;
    transition: all 0.3s ease;
    /*box-shadow: 0px 0px 8px 0px rgba(17, 17, 17, 0.34) inset;*/
    display: block;
}

.switch > label.switch-inner:before{
    content: attr(data-on);
    position: absolute;
    top: 2px;
    right: 1rem;
    text-align: center;
}

.switch > label.switch-inner:after{
    content: attr(data-off);
    width: 20vw;
    height: 25px;
    background: #fff;
    border-radius: 26px;
    position: absolute;
    left: 2px;
    top: 2px;
    text-align: center;
    transition: all 0.3s ease;
    box-shadow: 0px 0px 6px -2px #111;
}


.switch input[type="checkbox"]{
    cursor: pointer;
    width: 40vw;
    height: 30px;
    opacity: 0;
    position: absolute;
    z-index: 1;
    left: 0px;
    margin: 0px;
}

.switch input[type="checkbox"]:checked + label.switch-inner:after{
    content: attr(data-on);
    left: 20vw;
    right: 20px;
}

.switch input[type="checkbox"]:checked + label.switch-inner:before{
    content: attr(data-off);
    right: 20vw;
    left: 20px;
}
</style>