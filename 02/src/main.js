import Vue from 'vue/dist/vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import axios from 'axios'
Vue.config.productionTip = false
Vue.prototype.$axios = axios
// import store from './store'

// new Vue({
//   store,
//   render: h => h(App),
// }).$mount('#app')
// Vue.component('Demo', {
//   template: `
//     <div>template</div>
//   `,
//   // 会编译成render
//   render: h => <div>render</div>
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
