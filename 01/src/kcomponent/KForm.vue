<template>
  <form>
    <slot></slot>
  </form>
</template>

<script>
export default {
  provide(){
    return {
      form: this
    }
  },
  props:['model','rules'],
  methods:{
    validate(cb){
      // 执行所有的formitem的校验方法
      const tasks = this.$children
        .filter(v=>v.prop)
        .map(item=>item.validate())

      Promise.all(tasks)
        .then(()=>cb(true))
        .catch(()=>cb(false))

    }
  }
}
</script>

<style>

</style>
