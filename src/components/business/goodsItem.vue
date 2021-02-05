<!--
 * @Description:商品
 * @Date: 2021-02-04 21:20:18
-->
<template>
    <div class="product-item">
        <div
            class="product-img-wrapper"
        >
            <img src="@/assets/images/goods.svg" class="product-img">
            <div class="recomend">律师推荐</div>
            <div class="product-img__foot flex_box_between">
                <div class="flag begin">即将开始</div>
                <!-- <div class="flag process">拍卖中</div> -->
                <div>
                    <span>围观&nbsp;87</span>&emsp;
                    <span>关注&nbsp;87</span>
                </div>
            </div>
        </div>
        <div class="product-name">北京市朝阳区东兴路120号宇恒大厦一期债权北京市朝阳区东兴路120号宇恒大厦一期债权</div>
        <div class="flex_box_between product-info">
            <div>债权总额：<span style="font-weight:bold;font-size:14px;">837.33</span>&nbsp;万</div>
            <div>当前价格：<span style="color:#d9001b"><span style="font-size:24px;font-weight:bold;">837.33</span>&nbsp;万</span></div>
        </div>
        <div class="flex_box_between product-info">
            <div class="flex_box">
                <span>开始时间：</span>
                <a-statistic-countdown :value="deadline" format="D 天 H 小时 m 分 s 秒" />
            </div>
            <div>1&nbsp;次出价</div>
        </div>
    </div>
</template>

<script>
export default {
    name: '',

    components: {},

    props: {},

    data() {
        return {
            deadline: Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30
        };
    },

    computed: {},

    mounted() {},

    methods: {}
};

</script>
<style lang='scss' scoped>
@import "@/assets/style/mixin.scss";
.m-t-16 {
    margin-top: 16px;
}
.font-13 {
    font-size: 13px;
}
.product-item {
    float: left;
    width: 322px;
    margin-right: 26px;
    border-radius: 8px 8px 0 0;
    &:last-child {
        margin-right: 0;
    }
    .product-img-wrapper {
        width: 100%;
        height: 242px;
        position: relative;
        overflow: hidden;
        &:hover {
            .product-img {
                transform: scale(1.15);
            }
        }
        .product-img {
            position: relative;
            width: 100%;
            height: 100%;
            transition: all .25s;
        }
        .recomend {
            position: absolute;
            top: 8px;
            left: 8px;
            width: 74px;
            height: 28px;
            line-height: 28px;
            text-align: center;
            border-radius: 4px;
            background-color: rgba(0, 128, 128, 1);
            color: #fff;
        }
    }
    .goods-name {
        font-size: 18px;
        font-weight: bold;
    }
    .flag {
        width: 74px;
        height: 28px;
        line-height: 28px;
        border-radius: 4px;
        font-weight: bold;
        text-align: center;
        color: #fff;
        // 即将开始
        &.begin {
            background-color: rgb(245, 154, 35);
        }
        &.process {
            background-color: rgb(217, 0, 27);
        }
    }
    .product-img__foot {
        position: absolute;
        height: 72px;
        bottom: 0;
        left: 0px;
        right: 0;
        padding: 0 15px 8px 8px;
        align-items: flex-end;
        background-image: linear-gradient(-180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.58) 100%);
        color: #fff;
    }
    .product-name {
        margin-top: 14px;
        font-size: 18px;
        font-weight: bold;
        cursor: pointer;
        @include line-clamp(2);
        &:hover {
            color: teal;
        }
    }
    .product-info {
        font-size: 13px;
        margin-top: 10px;
        color: #7f7f7f;
    }
    /deep/ .ant-statistic-content {
        font-size: 13px;
        color: #7f7f7f;
    }
}
</style>
