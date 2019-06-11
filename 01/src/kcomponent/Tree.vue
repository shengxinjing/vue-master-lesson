<template>
  <div>

    <Node 
      v-for="(item, index) in data"
      :key="index"
      :data="item"
    >
    </Node>
  </div>
</template>

<script>
import Node from './Node'
export default {
  components:{Node},
data(){
  return {
    data: [
        {
          title:'Java架构师'
        },
        {
          title:'JS高级',
          expand: true,
          children:[
            {
              title:'ES6',
            },
                        {
              title:'动效',
            }
          ]
        },
        {
          title: "Web全栈",
          children: [
            {
              title: "Vue训练营",
              expand: true,
              children: [
                {
                  title: "组件化"
                },
                {
                  title: "源码"
                },
                {
                  title: "docker部署",
                  children:[
                    {title:'自动化部署'}
                  ]
                }
              ]
            },
            {
              title: "React",
              children: [
                {
                  title: "JSX"
                },
                {
                  title: "虚拟DOM"
                }
              ]
            },
            {
              title:'Node'
            }
          ]
        }
      ]
  }
}
}
</script>

<style>

</style>
