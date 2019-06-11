<template>
    <div>
      <!-- <ElementForm></ElementForm> -->
      <!-- <h2>{{name}}</h2>
      <k-input v-model="name"></k-input> -->

    <k-form :model="model" :rules="rules" ref="loginForm">
      <k-form-item label="用户名" prop="username">
        <k-input v-model="model.username" ></k-input>
      </k-form-item>
      <k-form-item label="确认密码" prop="password">
        <k-input type="password" v-model="model.password" ></k-input>
      </k-form-item>
      <k-form-item>
        <el-button type="primary" @click="submitForm('loginForm')">提交</el-button>
      </k-form-item>
    </k-form>


      <!-- <input v-model="name" /> -->
<!-- 
      <Child />
      <div style="color:red">
        {{msg}}
      </div>
      <button @click='boardcast'>广播事件</button> -->
    </div>
</template>

<script>
import ElementForm from './components/ElementForm'
import Child from './kcomponent/Child'
import KInput from './kcomponent/KInput'
import KFormItem from './kcomponent/KFormItem'
import KForm from './kcomponent/KForm'
export default {
  name: 'app',
  data(){
    return {
      name:'hello 开课吧',
      msg:'',
      model:{ username:'', password:''},
      // 校验规则
      rules:{
        username:[
          {required:true, message:'请输入用户名'}
        ],
        password:[
          {required:true, message:'请输入密码'}
        ]
      }
    }
  },
  provide:{
    title:'我是骚气的大圣老师'
  },
  components:{
    Child,
    ElementForm,
    KInput,
    KFormItem,
    KForm
  },
  methods:{
    boardcast(){
      this.$boardcast('boardcast', '来自App的广播消息')

    },
    submitForm(formName){
      this.$refs[formName].validate(valid=>{
        console.log(valid)
        if(valid){
          alert('校验成功')
        }else{
          alert('校验失败')
        }
      })
    }
  },
  mounted(){
    this.$on('dispatch',msg=>{
      this.msg = msg
    })
  }
}
</script>

<style>

</style>
