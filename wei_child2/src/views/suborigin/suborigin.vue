<template>
    <div class='hello'>
        is child page page ---

        <div><router-link to='/'>go childPath -- /</router-link></div>

        <div><router-link to='/suborigin/suborigin/child'>go childPath -- /suborigin/suborigin/child</router-link></div>

        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'Suborigin',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    },
    mounted() {
      window.a = '123'
       console.log(b) // 父应用全局定义的可以作用到子应用上
    }
}
</script>

<style>
.hello{
  color:red
}
</style>
