<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'App',
  };
</script>

<style lang="scss">
  @import "~@gridonic/components/styles/base";
  @import "~@gridonic/components/styles/button-plain";
  @import "~@gridonic/components/styles/print";

  @include gd-base;

  button {
    @include gd-button-plain;
  }

  @include gd-print;
</style>
