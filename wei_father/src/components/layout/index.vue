<template>
  <div class="app-wrapper">
    <div class="side" style="width:100px;float:left">

      <div> <router-link to="/main/index">A</router-link></div>
      <div><router-link to="/suborigin/sub_app">child</router-link></div>

    </div>

    <div style="width:calc(100% - 100px);height:80vh;float:right;background: #f5f5f5;">
      <router-view :key="key" />
    </div>
  </div>
</template>

<script>

export default {
  name: 'Layout',
  computed: {
    key() {
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
