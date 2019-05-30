<template>
  <div id="app">

    <h1>
      {{$store.name}}
    </h1>
   <div>冲啊，手榴弹扔了{{$store.state.count}}个</div>
    <button @click="add">扔一个</button>
    <button @click="addAsync">蓄力扔俩</button>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'app',
  components: {
    HelloWorld
  },
  // async + await ES7
  async mounted () {
    console.log(this.$store)
    let kaikeba
    let name = 1
    console.log(name)
    // let data
    // let ret = await this.$axios.get('/api/goods')
    // console.lstoreog(ret.data)

    // let mock = await this.$axios.get('/easymock/course/list')
    // console.log(mock.data)

    let prod = await this.$axios.get('http://localhost:9082/api/goods')
    console.log(prod.data)
  },
      methods:{
    add(){
      // 提交申请单
      this.$store.commit('increment')
    },
    addAsync(){
      this.$store.dispatch('incrementAsync')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
