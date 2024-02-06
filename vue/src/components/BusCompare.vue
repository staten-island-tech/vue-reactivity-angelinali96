<template>
    <div>
        <form action="submit" id="busSubmit">
        <select name="Select Bus1" id="buses1" title="select first bus route">
          <option value="">select bus</option>
        </select>
        <select name="Select Direction1" id="direction1" class="direction" title="select first bus direction">
          <option value="">select direction</option>
        </select>
      <select name="Select Bus2" id="buses2" title="select second bus route">
          <option value="">select bus</option>
        </select>
        <select name="Select Direction2" id="direction2" class="direction" title="select direction for second bus">
          <option value="">select direction</option>
        </select>
        <input type="submit" value="submit">
      </form>
    </div>
</template>

<script setup>

</script>

<style scoped>

</style>