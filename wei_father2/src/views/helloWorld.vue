<template>
  <div class="hello">
    is father page page

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted() {
    window.b = '456'
    // console.log(a) "ReferenceError: a is not defined"
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.hello{
  color:green
}
</style>
