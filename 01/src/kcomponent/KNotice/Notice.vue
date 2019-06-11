<template>
  <div class="knotice">
    <div class="knotive-content" :key='item.id' v-for="item in notices">
      {{item.content}}
    </div>
  </div>
</template>

<script>
let seed = 0
export default {
  data(){
    return {
      notices:[]
    }
  },
  methods:{
    add(notice){
      let id = 'k_' + (seed++)
      this.notices.push({
        ...notice,
        id
      })
      let duration = notice.duration || 1.5
      setTimeout(()=>{
        this.remove(id)
      },duration * 1000)
    },
    remove(id){
      this.notices = this.notices.filter(v=>v.id!==id)
      // const notices = this.notices
      // for(let i=0; i<notives.length;i++){
      //   if(notices[i].id===id){
      //     this.notices.splice(i,1)
      //     break
      //   }
      // }
    }
  }
}
</script>

<style>
    .knotice{
        position: fixed;
        width: 100%;
        top: 16px;
        left: 0;
        text-align: center;
        pointer-events: none;
    }
    .knotice-content{
        width:200px;
        margin:10px auto;
        font-size:14px;
        border:red 3px solid;
        padding: 8px 16px;
        background: #fff;
        border-radius: 3px;
        margin-bottom: 8px;
    }
</style>
