<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    name: 'App',
  });
</script>

<style lang="scss">
  @include gd-base;

  button {
    @include gd-button-plain;
  }

  @include gd-print;
</style>
