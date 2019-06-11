<template>
  <div>
    <input :type="type" @blur='onBlur' :value="value" @input="onInput">
  </div>
</template>

<script>
// 1. 失去焦点触发校验
// 2. 用户输入的时候 触发实时校验
export default {
  props:{
    value:{
      type:String,
      default: ''
    },
    type:{
      type:String,
      default:'text'
    }
  },
  methods:{
    onBlur(){
      this.$dispatch('validate')
    },
    onInput(e){
      this.$emit('input', e.target.value)
      this.$dispatch('validate')

    }
  }
}
</script>

<style>

</style>
