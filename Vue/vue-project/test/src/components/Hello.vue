<template>
    <div class="hello">
      <h3>{{msg}}</h3>
    </div>
</template>

<script>
    export default {
      name: 'hello',
      data () {
        return {
          msg: 'hello'
        }
      }
    }
</script>

<style scoped>
  h3{
    color: green
  }
</style>
