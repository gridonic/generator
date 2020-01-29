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
  @include gd-base;

  button {
    @include gd-button-plain;
  }

  @include gd-print;
</style>
