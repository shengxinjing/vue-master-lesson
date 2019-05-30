import Vue from 'vue/dist/vue'

import Vuex from './kvuex'

Vue.use(Vuex)
// 在这新建的new Store
export default new Vuex.Store({
  state:{
    count:0
  },
  // 修改数据的方法 使用commit申请
  mutations: {
    increment (state,n=1) {
      state.count += n
    }
  },
  // dispatch提交异步任务
  actions:{
    incrementAsync({commit}){
      setTimeout(()=>{
        commit('increment',2)
      },2000)
    }
  }
})