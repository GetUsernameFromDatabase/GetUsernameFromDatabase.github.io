<template>
  <router-view />
</template>

<script>
export default {
  name: 'App'
};
</script>

<style lang="scss">

$theme-colors: (
  "primary": #005959,
);
@import 'node_modules/bootstrap/scss/bootstrap.scss';
@import 'node_modules/bootstrap-vue/src/index.scss';
</style>