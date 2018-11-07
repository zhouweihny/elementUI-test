import Vue from 'vue'
import Router from 'vue-router'
import mainpage from '@/components/mainpage'
import page1 from '@/components/page1.vue'
import page2 from '@/components/page2.vue'
import page3 from '@/components/page3'
import page4 from '@/components/page4'

/**
 * 注意：
 * 当componeents下，vue文件与js文件同名的时候，引入的compoent一定要加.vue后缀，否则将加载js文件！
 * 在npm run dev状态下，同时有同名js在，删除这个后缀，不会报错，但下次重启或者build的时候，会报错！
**/

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainpage',
      component: mainpage,
      redirect: '/page1',
      children: [
        {
          path: '/page1',
          name: 'page1',
          component: page1
        },
        {
          path: '/page2',
          name: 'page2',
          component: page2
        },
        {
          path: '/page3',
          name: 'page3',
          component: page3
        },
        {
          path: '/page4',
          name: 'page4',
          component: page4
        }
      ]
    }
  ]
})
