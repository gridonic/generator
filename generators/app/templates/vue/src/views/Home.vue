<template>
  <div class="home">
    <app-logo/>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import AppLogo from '@/components/AppLogo.vue';

  @Component({
    components: { AppLogo },
  })
  export default class Home extends Vue {
  }
</script>

<style scoped lang="scss">
</style>
