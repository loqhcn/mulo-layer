<template>
   <div v-if="visible">
            弹出层插件
        </div>
        <div class="layer-content">
            <div class="close" @click="close()">关闭</div>
            <div class="msg">消息内容</div>
        </div>
</template>

<script>
export default {
    setup () {
        

        return {}
    },
    data() {
        return {
            visible: true
        }
    },
    methods: {
        close() {
            console.log('close');
        }
    },
}
</script>

<style lang="scss" scoped>
    .shadow{
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        position: fixed;
        background-color: rgba(0,0,0,0.7);
    }
    .layer-content{

    }
</style>