<template>
  <ul>
    <li class="">

      <span> {{data.title}}</span>
      <!-- 递归 如果有child，渲染自己 -->
     <Node 
      v-for="(item, index) in data.children"
      :key="index"
      :data="item"
    >
    
    </Node>
    </li>
  </ul>
</template>

<script>
export default {
  name:"Node",
  props:['data']
}
</script>

<style>

</style>
