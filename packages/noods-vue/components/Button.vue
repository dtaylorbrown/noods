<template>
  <button @click="handleClick">Boop</button>
</template>

<script lang="ts">
  import Vue from "vue";
  export default Vue.extend({
    methods: {
      handleClick: () => {
        console.log("Boop");
      },
    },
  });
</script>