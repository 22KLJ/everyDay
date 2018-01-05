import Vue from 'vue'
import Router from 'vue-router'
import tripPage from '@/components/common/TripPage'
import bottombar from '@/components/common/BottomBar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      components: {
        default: tripPage,
        bottombar: bottombar
      }
    }
    /* {
      path:'/custom',
      redirect:'/custom/date',
      component:custom,
      children:[
        {path:'date', component: CustomDate},
        {path:'people', component: TripPeople},
        {path:'branch', component: TripBranch},
        {path:'rec', component: TripRec},
        {path:'result', component: RecResult},
        {path:'self', component: TripSelf},
        {path:'self/:id', component: TripSelfSite},
        {
          path:'blank/:id',
          component: CustomBlank,
          children:[
            {path:'hotel',component:StayPage},
            {path:'hotel/:id',component:StayView}
          ]
        },
        {path:'recset/:id',component:RecResult}
      ]
    },
    {
      path:'/pay/:id',
      component:customTripOrderDetail
    },
    {
      path:'/wxpay/:id',
      component:orderWxpay
    },
    {
      path:'/wxpay/failed/:id',
      component:UserTripOrderDetailViewFailed
    },
    {
      path:'/test',
      component: SnowTestContent
    },
    {
      path:'/trip',
      components:{
        default:trip_page,
        bottombar: bottombar
      }
    },
    {
      path:'/trip/search',
      component:trip_search
    },
    {
      path:'/sites/:country',
      components:{
        default: SitePage,
        countries: CountrySites,/!* 这里总感觉实现的方式不好 *!/
        bottombar: bottombar
      }
    },
    {
      path:'/stay',
      components:{
        default: StayPage,
      }
    },
    {
      path:'/site/:id',
      component: OneSitePage,
      redirect:'/site/:id/set',
      children: [
        {path:'set', component: OrderPackage},
        {path:'slide', component: SiteSlide},
        {path:'car', component: SiteCar}/!*,
          {path:'fun', component: SiteFun}*!/
      ]
    },
    {
      path:'/news',
      components:{
        default:news_all,
        bottombar: bottombar
      }/!*,
        children: [
          {path:'latest', component: News},
          {path:'hottest', component: NewsVideo},
          {path:'video', component: NewsVideo},
          {path:'search', component: NewsSearch}
        ]*!/
    },
    {
      path:'/news/:id',
      component: news_content
    },
    {
      path:'/user',
      components:{/!*这里面不包含，它就不会在router-link中显示，显示它也没有*!/
        default: user_page,
        bottombar: bottombar
      }
    },
    {
      path:'/user/order',
      redirect:'/user/order/all',
      component: user_order_page
    },
    {
      path:'/user/order/:id',
      component: user_order_page
    },
    {
      path:'/user/bind',
      component: login_bind
    },
    {
      path:'/user/bind_true/:id',
      component: login_bind_true
    },
    {
      path:'/user/news',
      component: user_news_page
    },
    {
      path:'/user/trip',
      component: user_trip_page
    },
    {
      path:'/user/trip/:id',
      component: user_trip_package_self
    },
    {
      path:'/user/trip/order/:id',
      component: UserTripOrderDetailView
    },
    {
      path:'/user/contact',
      component: user_contact_page
    },
    {
      path:'/user/contact/:id',
      component: user_contact_view
    },
    {
      path:'/user/set',
      component: user_set_page,
      children:[
        {
          path:'/user/set/avatar',
          component: user_set_page_avatar
        },
        {
          path:'/user/set/avatar',
          component: user_set_page_avatar
        },
        {
          path:'/user/set/nickname',
          component: user_set_page_nickname
        },
        {
          path:'/user/set/place',
          component: user_set_page_place
        },
        {
          path:'/user/set/signature',
          component: user_set_page_signature
        },
        {
          path:'/user/set/sex',
          component: user_set_page_sex
        },
        {
          path:'/user/set/birthday',
          component: user_set_page_birthday
        },
        {
          path:'/user/set/equipment',
          component: user_set_page_equipment
        }

      ]
    },
    {
      path:'/user/set_phone',
      component: user_set_phone_page
    } */
  ]
})
