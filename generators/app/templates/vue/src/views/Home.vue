<template>
  <div class="home">
    <app-logo/>
    <div>App Version: {{ appInfo.appVersion }}</div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { State } from 'vuex-class';

  import AppInfo from '@/main/AppInfo';
  import AppLogo from '@/components/AppLogo.vue';

  @Component({
    components: { AppLogo },
  })
  export default class Home extends Vue {
    @State('appInfo') appInfo!: AppInfo;
  }
</script>

<style scoped lang="scss">
</style>
