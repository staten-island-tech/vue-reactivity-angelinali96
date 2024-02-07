<script setup>
const props = defineProps({
    instance: String,
    directionName: String, 
    directionId: Number,
});
</script>
<template>
    <div>
        <h2>select direction</h2>
        <div id="radios">               
    <label for="direction 1">
      <input type="radio" :name="instance" id="direction 1" value="1" />
      <span>Direction 1</span>
    </label>
    <label for="direction 2">
      <input type="radio" :name="instance" id="direction 2" value="2" />
      <span>Direction 2</span>
    </label>
  </div>
    </div>
</template>


<style scoped>
#radios label {
  cursor: pointer;
  position: relative;
}

#radios label + label {
  margin-left: 15px;
}

input[type="radio"] {
  opacity: 0; /* hidden but still tabable */
  position: absolute;
}

input[type="radio"] + span {
  font-family: 'Material Icons';
  color: #B3CEFB;
  padding: 12px;
  transition: all 0.4s;
  -webkit-transition: all 0.4s;
}

input[type="radio"]:checked + span {
  color: #D9E7FD;
  background-color: #4285F4;
}

input[type="radio"]:focus + span {
  color: #fff;
}

/* ================ TOOLTIPS ================= */

#radios label:hover::before {
  content: attr(for);
  font-family: Roboto, -apple-system, sans-serif;
  text-transform: capitalize;
  font-size: 11px;
  position: absolute;
  top: 170%;
  left: 0;
  right: 0;
  opacity: 0.75;
  background-color: #323232;
  color: #fff;  
  padding: 4px;
  border-radius: 3px;
  display: block;
}
#radios {
  text-align: center;
  margin: 0 auto;
  background-color: #1f3b7c;
  padding: 12px;
}
.container {
  margin: 0 auto;
}
</style>