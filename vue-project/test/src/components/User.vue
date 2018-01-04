<template>
    <div class="user">
      <h3>{{msg}}</h3>
    </div>
</template>

<script>
    export default {
      name: 'user',
      data () {
        return {
          msg: 'user'
        }
      }
    }
</script>

<style scoped>
  h3{
    color:pink
  }
</style>
