import Vue from 'vue/dist/vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   if (store.getters.token) { // 判断是否有token
//     if (to.path === '/login') {
//       next({ path: '/' });
//     } else {
//       if (store.getters.roles.length === 0) { // 判断当前用户是否已拉取完user_info信息
//         store.dispatch('GetInfo').then(res => { // 拉取info
//           const roles = res.data.role;
//           store.dispatch('GenerateRoutes', { roles }).then(() => { // 生成可访问的路由表
//             router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
//             next({ ...to, replace: true }) // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
//           })
//         }).catch(err => {
//           console.log(err);
//         });
//       } else {
//         next() //当有用户权限的时候，说明所有可访问路由已生成 如访问没权限的全面会自动进入404页面
//       }
//     }
//   } else {
//     if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
//       next();
//     } else {
//       next('/login'); // 否则全部重定向到登录页
//     }
//   }
// });

a.js
a_123kjhks.js?hash 上线
a_7haukjjk.js 上线
上线的文件列表可以读到
老的html     老的静态资源

新的html     新的静态资源
