import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import Notice from '../src/components/notice/notice.js'
// Notice.info

Vue.prototype.$Notice = Notice
// 老师什么时候使用挂载方法？
Vue.config.productionTip = false

// class Bus {
//   constructor(){
//     this.callbacks = {}
//   }
//   $on(name, fn){
//     // 监听
//     this.callbacks[name] = this.callbacks[name] || []
//     this.callbacks[name].push(fn)
//   }
//   $emit(name, args){
//     // 触发
//     if(this.callbacks[name]){
//       this.callbacks[name].forEach(cb=>cb(args))
//     }
//   }
// }

Vue.prototype.$bus = new Vue() 

// Vue本身有$on和$emit的机制

Vue.prototype.$dispatch = function(eventName,data){
  // 想上传递，一直不停的获取$parent
  let parent = this.$parent
  while(parent){
    parent.$emit(eventName, data)
    parent = parent.$parent
  }
}
Vue.prototype.$boardcast = function(eventName, data){
  // 递归通知所有的子元素
  boardcast.call(this, eventName, data)
}
function boardcast(eventName, data){
  this.$children.forEach(child=>{
    // 每一个字组件
    child.$emit(eventName, data)
    if(child.$children.length){
      boardcast.call(child, eventName, data)
    }
  })
}

// Vue.prototype.$dispatch =  function(eventName, data) {
//   let parent = this.$parent
//   // 查找父元素
//   while (parent ) {
//     if (parent) {
//       // 父元素用$emit触发
//       parent.$emit(eventName,data)
//       // 递归查找父元素
//       parent = parent.$parent
//     }else{
//       break
//     }
//   }
// }

// Vue.prototype.$boardcast = function(eventName, data){
//   boardcast.call(this,eventName,data)
// }
// function boardcast(eventName, data){
//   this.$children.forEach(child => {
//     // 子元素触发$emit
//     child.$emit(eventName, data)
//     if(child.$children.length){
//       // 递归调用，通过call修改this指向 child
//       boardcast.call(child, eventName, data)
//     }
//   });
// }

new Vue({
  render: h => h(App),
}).$mount('#app')
