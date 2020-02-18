<template>
  <div class="home">
    <app-logo/>
    <div>App Version: {{ info.appVersion }}</div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { createNamespacedHelpers } from 'vuex';

  import AppLogo from '@/components/AppLogo.vue';
  import { namespace } from '@/store/AppModule';

  const { mapState } = createNamespacedHelpers(namespace);

  export default Vue.extend({
    name: 'Home',
    components: {
      AppLogo,
    },
    computed: {
      ...mapState(['info']),
    },
  });
</script>

<style lang="scss" scoped>
</style>
