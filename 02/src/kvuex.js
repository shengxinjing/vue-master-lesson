// 1. 支持vue.use

// import
let Vue
class Store {
  constructor (options = {}) {
    this.name = '我就是很骚气'
    // state需要响应式
    // 所以需要Vue的能力
    // 这样就是响应式的了
    this.state = new Vue({
      data: options.state
    })
    // mutations存储
    // commit执行mutions
    this.mutations = options.mutations || {}
    this.actions = options.actions || {}
  }
  commit = (type, arg) => {
    this.mutations[type](this.state, arg)
  }
  dispatch (type, arg) {
    this.actions[type]({
      commit: this.commit,
      state: this.state
    }, arg)
  }
}
// .use会执行这个函数 穿度Vue
function install (_Vue) {
  Vue = _Vue
  // 执行Vue.use的时候 会执行这个函数
  Vue.mixin({
    beforeCreate () {
      if (this.$options.store) {
        Vue.prototype.$store = this.$options.store
      }
    }
  })
}

export default { Store, install }
