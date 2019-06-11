<template>
  <div id="app">


    <!-- <Cart></Cart>   -->
    <hr>
    <!-- <ElementForm /> -->
    <hr>
    <!-- <h1>{{name}}</h1> -->
<!-- 
    <k-form-item label="用户名">
      <k-input v-model="name"></k-input>
    </k-form-item> -->


    <k-form :model="model" :rules="rules" ref="loginForm">
      <k-form-item label="用户名" prop="username">
          <Demo>
          <k-input v-model="model.username"></k-input>

          </Demo>
      </k-form-item>
      <k-form-item label="确认密码" prop="password">
        <k-input type="password" v-model="model.password"></k-input>
      </k-form-item>
      <k-form-item>
        <el-button @click="submitForm('loginForm')">提交</el-button>
      </k-form-item>
    </k-form>  
    
      <div>
        <button @click="message">点我</button>
        <Box v-if="showMsg">
          哈哈
        </Box>
      </div>
      <div>
        <Tree></Tree>
      </div>
    </div>


</template>

<script>
import Cart from './components/Cart'
import ElementForm from './components/ElementForm'
import KForm from './components/KForm'
import KInput from './components/KInput'
import KFormItem from './components/KFormItem'
import Demo from './components/Demo'
import Box from './kcomponent/Box.vue'
import Tree from './components/Tree.vue'
export default {
  name: 'app',
  provide:{
    name:'我是骚气的大圣老师'
  },
  components:{
    Cart,
    ElementForm,
    KForm,
    KInput,
    KFormItem,
    Demo,
    Box,
    Tree
  },
  data () {
    return {
      name:'开课吧',
      showMsg:false,
      model: { username: "", password: "" },
      rules: {
        username: [
          { required: true, message: "请输入用户名" },
           { type: 'email', message: '邮箱格式不正确' }
          ],
        password: [{ required: true, message: "请输入密码" }],
      }
    }
  },
    methods: {
      message(){
        this.showMsg = true
        setTimeout(() => {
          this.showMsg = false
          
        }, 2000);
  // window.alert()
        this.$Notice.info({
            content: '必须的！',
            duration: 200
        });

      },
      submitForm(form) {
          this.$refs[form].validate(valid=>{
              if (valid) {
                  alert('请求登录!')
              } else {
                  alert('校验失败！')
              }
          })
      }
  },
}
</script>


