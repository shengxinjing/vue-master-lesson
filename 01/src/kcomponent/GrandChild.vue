<template>
    <div>
      <h2>Grandson1</h2>
      <div>
        祖先元素提供的{{title}}
      </div>
      <div>
        <button @click='dispatch'>通知祖先元素</button>
        <p style="color:red">
          {{msg}}
        </p>
      </div>
    </div>
</template>

<script>
export default {
  // 注入组件元素的数据
  data(){
    return {
      msg:''
    }
  },
  inject:['title'],
  mounted(){
    this.$on('boardcast', msg=>{
      this.msg = msg
    })
  },
  methods:{
    dispatch(){
      this.$dispatch('dispatch', '来自GrandChild的消息')
    }
  }
}
</script>

<style>

</style>
