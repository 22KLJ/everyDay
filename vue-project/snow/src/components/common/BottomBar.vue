<template>
    <div id="app">
        <mt-tabbar :class="{static:focusIpt}" v-model="current" fixed style="z-index:100;">
            <mt-tab-item id="snow-trip" @click.native="handleJump('/trip')">
                <img slot="icon"
                     :src="current=='snow-trip'?'./assets/tabbar-trip@2x.png':'./assets/tabbar-trip-gray@2x.png'">
                  行程
            </mt-tab-item>
            <mt-tab-item id="snow-sites" @click.native="handleJump('/sites/rec')">
                <img slot="icon"
                     :src="current=='snow-sites'?'./assets/cable-car-blue@2x.png':'./assets/cable-car@2x.png'">
                  雪场
            </mt-tab-item>
            <mt-tab-item id="snow-news" @click.native="handleJump('/news')">
                <img slot="icon" :src="current=='snow-news'?'./assets/newspaper@2x.png':'./assets/news@2x.png'" >
                  资讯
            </mt-tab-item>
            <mt-tab-item id="snow-user" @click.native="handleJump('/user')">
                <img slot="icon" :src="current=='snow-user'?'./assets/user-blue@2x.png':'./assets/User@2x.png'">
                  用户
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>

<script>
    export default {
      data: function () {
        return {
          current: '',
          focusIpt: false
        }
      },
      watch: {
        $route: function (n, o) {
          /* 组件被重用时，保证 路由始化时，字体颜色 与 路由对应 -- 当点击 微信浏览器上方的“返回”时的情况 */
          var currPath = n.path.split('/')[1]
          this.current = 'snow-' + currPath
        }
        // 不存在的路由进行跳转 -- 用户点击触发
        // 有一个缺陷： 当点击 微信浏览器上方的“返回”时，这个不会被触发，原因：组件复用，created不再执行
      },
      methods: {
        handleJump: function (val) {
          this.router.push(val)
        }
      },
      created: function () {
          // 保证在任意tabbar的tab上刷新页面时，保持 tabbar文字与路由一致变蓝
          // 文字 发蓝的必要条件 selected与id值一致时变蓝
        console.log('bottombar-created')
        if (this.$route.path === '/') {
          this.current = 'snow-trip'// 首页默认对应的路由
          return
        }
          // 这里的current改变会触发watch函数 -- 路由始化时，字体颜色 与 路由对应
        this.current = 'snow-' + this.$route.path.split('/')[1]
      }
    }
</script>

<style>

</style>
