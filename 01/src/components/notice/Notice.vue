<template>
    <div class="alert">
        <div class="alert-content" v-for="item in notices" :key="item.name" >{{ item.content }}</div>
    </div> 
</template>
<script>
    let seed = 0;


    export default {
        data () {
            return {
                notices: []
            }
        },
        methods: {
            add (notice) {
                let id = 'k_' + (seed++)
                this.notices.push({
                  ...notice,
                  id 
                })
                const duration = notice.duration;
                setTimeout(() => {
                    this.remove(id);
                }, duration * 1000);
            },
            remove (id) {
                const notices = this.notices;
                for (let i = 0; i < notices.length; i++) {
                    if (notices[i].id === id) {
                        this.notices.splice(i, 1);
                        break;
                    }
                }
            }
        }
    }
</script>
<style>
    .alert{
        position: fixed;
        width: 100%;
        top: 16px;
        left: 0;
        text-align: center;
        pointer-events: none;
    }
    .alert-content{
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