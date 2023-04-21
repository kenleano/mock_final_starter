<template>
  <div>
    <h1>Country Population</h1>
    <ul>
      <li>Name: {{ country.name }}</li>
      <li>Population: {{ country.population }}</li>
    </ul>
    <!-- $emit activates a function in the parent component -->
    <button @click="$emit('cancel')">Cancel</button>
  </div>
</template>
<script>
export default {
  props: ["country"],
};
</script>

<style>

</style>