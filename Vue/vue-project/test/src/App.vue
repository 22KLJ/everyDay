<template>
  <div id="app">
    <nav>
      <ul>
        <li v-for="item in menuList">
          <router-link :to="item.url">{{item.name}}</router-link>
        </li>
      </ul>
    </nav>
    <div class="show">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      menuList: [
        {name: 'Home', url: '/home'},
        {name: 'User', url: '/user'},
        {name: 'Hello', url: '/hello'}
      ]
    }
  }
}
</script>

<style scoped>
  ul{
    list-style: none;
    width: 100%;
  }
  li{
    float: left;
    width: 33.3%;
  }
  .show{
    text-align: center;
  }
</style>
