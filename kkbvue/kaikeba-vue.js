
class Dep {
  constructor() {
    // 存数所有的依赖
    this.deps = []
  }

  // 在deps中添加一个监听器对象 
  addDep(dep) {
    if(this.deps.indexOf(dep)==-1){
      this.deps.push(dep)
    }
  }
  depend() {
    Dep.target.addDep(this)
  }
  // 通知所有监听器去更新视图
  notify() {
    this.deps.forEach((dep) => {
      dep.update()
    })
  }
}
Dep.target = null



// {{name}}

// PP
// 监听器
class Watcher {
  constructor(vm, key, cb) {
    // 在new一个监听器对象时将该对象赋值给Dep.target，在get中会用到
    // 将 Dep.target 指向自己
    // 然后触发属性的 getter 添加监听
    // 最后将 Dep.target 置空
    this.cb = cb
    this.vm = vm
    this.key = key
    this.value = this.get()
  }
  get() {
    Dep.target = this
    let value = this.vm[this.key]
    return value
  }
  // 更新视图的方法
  update() {
      this.value = this.get()
      this.cb.call(this.vm, this.value)
  }
}





class KVue {
  constructor(options) {
    this.$data = options.data
    this.$options = options
    this.$store = options.store ||{}

    this.observer(this.$data)
    // 新建一个Watcher观察者对象，这时候Dep.target会指向这个Watcher对象 
    // new Watcher()
    // 在这里模拟render的过程，为了触发test属性的get函数
    console.log('模拟render，触发test的getter', this.$data)
    if(options.created){
      options.created.call(this)
    }
    // 解析html
    this.$compile = new Compile(options.el, this)
  }
  observer(value) {
    if (!value || (typeof value !== 'object')) {
      return
    }
    Object.keys(value).forEach((key) => {
      this.proxyData(key)
      this.defineReactive(value, key, value[key])
    })
  }
  defineReactive(obj, key, val) {
    // 获取值触发get
    // 修改值 出发set
    // {{name}}
    // k-text=name
    // this.name = xx
    const dep = new Dep()
    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get() {
        // 将Dep.target（即当前的Watcher对象存入Dep的deps中）
        // 添加依赖
        Dep.target && dep.addDep(Dep.target)
        return val
      },
      set(newVal) {
        if (newVal === val) return
        val = newVal

        // 在set的时候触发dep的notify来通知所有的Watcher对象更新视图
        dep.notify()
      }
    })
  }
  proxyData(key) {

    Object.defineProperty(this, key, {
      configurable: false,
      enumerable: true,
      get() {

        return this.$data[key]
      },
      set(newVal) {
        this.$data[key] = newVal
      }
    })
  }

}