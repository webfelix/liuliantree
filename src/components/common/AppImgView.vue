<!--
 * @Description:图片全屏预览
 * @Date: 2021-02-04 13:33:21
-->
<template>
    <div class="img-view">
        <div class="img-view__body">
            <app-icon icon-name="khkjguanbi" class="img-view__close" @click="closeView" />
            <div class="img-view__wrapper scrollYBar">
                <img :src="imgUrl" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {},

    props: {
        imgUrl: {
            type: String,
            default: ''
        }
    },

    data() {
        return {};
    },

    computed: {},

    methods: {
        closeView() {
            this.$emit('closeView');
        }
    }
};
</script>
<style lang='scss' scoped>
.img-view {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.5);
    z-index: 2105;
    .img-view__body {
        position: absolute;
        left: 50%;
        top: 50%;
        width: 80%;
        height: 90%;
        margin: auto;
        transform: translate(-50%,-50%);
        .img-view__close {
            position: absolute;
            right: -30px;
            top: 0px;
            font-size: 30px;
            color: #fff;
            cursor: pointer;
            z-index: 2;
        }
        .img-view__wrapper {
            width: 100%;
            height: 100%;
            padding: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: auto;
            & img {
                max-width: 100%;
                max-height: 100%;
            }
        }
    }
}
</style>
