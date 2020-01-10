<template>
  <div class="home">
    <app-logo/>
    <div>App Version: {{ info.appVersion }}</div>
  </div>
</template>

<script>
  import { createNamespacedHelpers } from 'vuex';

  import AppLogo from '@/components/AppLogo.vue';
  import { namespace } from '@/store/AppModule';

  const { mapState } = createNamespacedHelpers(namespace);

  export default {
    name: 'Home',
    components: {
      AppLogo,
    },
    computed: {
      ...mapState(['info']),
    },
  };
</script>

<style scoped lang="scss">
</style>
