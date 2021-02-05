<template>
    <div v-if="show" class="custom-loading">
        <div class="custom-loading-Mask" />
        <div class="custom-loading-box">
            <a-spin :tip="text" />
        </div>
    </div>
</template>

<script>
import { Spin } from 'ant-design-vue';
import Vue from 'vue';
Vue.use(Spin);

export default {
    data() {
        return {
            icon: '',
            show: false,
            text: '加载中...',
            progressColor: '#1f85ec'
        };
    }
};
</script>

<style>
.custom-loading{
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 9999999999;
    display: flex;
    justify-content: center;
    align-items: center;
}
.custom-loading-Mask {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(255,255,255,0.5);
}
.custom-loading-box{
    width: 138px;
    height: 138px;
    border-radius: 6px;
    /* background: #fff; */
    position: relative;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
}
.custom-loading-content{
    width: 106px;
    height: 106px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-content:center;
    flex-wrap: wrap;
    /* border: 3px solid #eee; */
    position: relative;
}
.custom-loading-content:after{
}
@-webkit-keyframes motion{
    0%{-webkit-transform:rotate(0deg);}
    25%{-webkit-transform:rotate(90deg);}
    50%{-webkit-transform:rotate(180deg);}
    75%{-webkit-transform:rotate(270deg);}
    100%{-webkit-transform:rotate(360deg);}
}

.custom-loading-content img{
    width: 30px;
    height: 30px;
    margin-bottom: 20px;
}
.custom-loading-content span{
    width: 100%;
    text-align: center;
    font-size: 12px;
    color:#fff;
}
.custom-loading-content em{
    position: absolute;
    width: 106px;
    height: 106px;
    top: -3px;
    left: -3px;
    border: 3px solid transparent;
    border-left: 3px solid;
    border-radius: 50%;
    box-sizing: content-box;
    -webkit-animation: motion 1s infinite linear;
    animation: motion 1s infinite linear;
}
</style>
