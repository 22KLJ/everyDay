<template>
    <div>
      <h2>{{msg}}</h2>
      <hr>
      <h3>{{count}}</h3>
      <button @click="$store.commit('add')">+</button>
      <button @click="$store.commit('reduce')">-</button>
    </div>
</template>

<script>
    import store from '../../vuex/store'
    import {mapState} from 'vuex'
    export default {
      name: 'count',
      data () {
        return {
          msg: 'Hello Vuex'
        }
      },
      store,
      computed: mapState(['count']),
      created () {
        console.log(this.$store.state)
      }
    }
</script>

<style scoped>

</style>
