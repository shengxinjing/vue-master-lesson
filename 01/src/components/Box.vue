<template>
    <div class='box'>
        <div class="box-content">
          <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
  
}
</script>

<style>
    .box{
        position: fixed;
        width: 100%;
        top: 16px;
        left: 0;
        text-align: center;
        pointer-events: none;
    }
    .box-content{
        width:200px;
        margin:10px auto;
        font-size:14px;
        border:blue 3px solid;
        padding: 8px 16px;
        background: #fff;
        border-radius: 3px;
        margin-bottom: 8px;
    }
</style>