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
    import {mapState, mapMutations, mapGetters} from 'vuex'
    export default {
      name: 'count',
      data () {
        return {
          msg: 'Hello Vuex'
        }
      },
      store,
      computed: {
        ...mapState(['count']),
        ...mapGetters(['count'])
      },
      created () {
        console.log(this.$store.state)
      },
      methods: mapMutations(['add', 'reduce'])
    }
</script>

<style scoped>

</style>
