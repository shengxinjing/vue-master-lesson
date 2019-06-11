// 单例模式，缓存

import Message from './message'

// 最终对外暴露的api

let instance 

function notice({duration=1.5, content=""}){
  instance = instance || Message.newInstance()
  instance.add({
    content,
    duration
  })
}
export default{
  info(options){
    return notice(options)
  }
}