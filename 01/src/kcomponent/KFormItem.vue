<template>
  <!-- 1. 预留插槽，扩展input
2. 能够展示label和校验的错误信息
3. 能够进行校验 -->
<div>
  <label v-if="label">
    {{label}}
  </label>
  <slot></slot>
  <p v-if="error" style="color:red">
    {{error}}
  </p>
</div>


</template>

<script>
import Schema from 'async-validator'
export default {
  props:['label','prop'],
  // 能够获取全部的规则
  inject:['form'],
  data(){
    return {
      error:''
    }
  },
  mounted(){
    this.$on('validate', this.validate)
  },
  methods:{
    validate(){
      console.log('校验')
    // 每个item都有validate方法
    // 1. 获取rule 校验规则
    const rules = this.form.rules[this.prop]
    // 2. 获取数据模型
    const value = this.form.model[this.prop]
    let desciptor = {
      [this.prop]:rules
    }
    const schema = new Schema(desciptor)
    return schema.validate({
      [this.prop]:value
    }, errors=>{
      // console.log(errors)
      if(errors){
        this.error = errors[0].message
      }else{
        this.error = ''
      }
    })
    }

  }
}
</script>

<style>

</style>
