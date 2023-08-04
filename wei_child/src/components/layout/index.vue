<template>
  <div class="app-wrapper">
   <router-view :key="key" />
  </div>
</template>

<script>

export default {
  name: 'Layout',
  computed: {
    key () {
      return this.$route.path
    }
  },
  methods: {

  }
}
</script>

<style  scoped>

  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
  }
</style>
