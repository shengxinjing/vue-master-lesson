<template>
  <div class="home">
    <h1>{{name|reverse}}</h1>
    <img alt="Vue logo" src="../assets/logo.png">
      <input type="text" v-model="title">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data(){
    return {
    name:'hello',
  title:'xx'
    }
  },
  components: {
    HelloWorld
  },
  filters:{
    reverse(s){
      console.log(s)
      return s.split('').reverse().join('')
    }
  }
}
</script>
