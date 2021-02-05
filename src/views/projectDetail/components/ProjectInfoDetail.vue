<!--
 * @Description:
 * @Date: 2021-02-05 17:03:34
-->
<template>
    <div class="info-detail">
        <div class="sales-advisor flex_box">
            <div class="flex_box">
                <img class="avator" src="@/assets/images/avator.jpg">
                <span class="sales-name">刘倩</span>
                <span>销售顾问</span>
            </div>
            <div style="margin-left:56px;">咨询电话：14332245678</div>
        </div>
        <div class="sales-introduce flex_box">
            <div class="tit">竞价说明</div>
            <div class="introduce-list">
                <span>起拍价：</span><span class="val">¥1234</span>
                <span>竞拍周期：</span><span class="val">¥1234</span>
                <span>加价幅度：</span><span class="val">¥1234</span>
                <span>保证金：</span><span class="val">¥1234</span>
                <span>延迟周期：</span><span class="val">¥1234</span>
                <span>尾款支付截止：</span><span class="val">¥1234</span>
            </div>
        </div>
        <div class="sales-introduce flex_box">
            <div class="tit">专项服务</div>
            <div class="introduce-list">
                <span v-for="(serv,index) in services" :key="index">
                    <img src="@/assets/images/gou.svg" class="icon"><span class="val">{{ serv }}</span>
                </span>
            </div>
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
            services: ['全程服务', '评估咨询', '律师尽调', '法律服务', '风险代理']
        };
    },

    computed: {},

    mounted() {},

    methods: {}
};

</script>
<style lang='scss' scoped>
.info-detail {
    .sales-advisor {
        padding: 16px 0;
        border-bottom: 1px solid #f2f2f2;
        .avator {
            width: 60px;
            height: 60px;
            margin-right: 16px;
            border-radius: 50%;
        }
        .sales-name {
            color: #333;
            margin-right: 8px;
            font-weight: bold;
        }
    }
    .sales-introduce {
        padding: 16px 0;
        align-items: flex-start;
        .tit {
            width: 80px;
            padding-top: 2px;
        }
        .introduce-list {
            flex:1;
            line-height: 26px;
            color:  #7f7f7f;
            .val {
                margin-right: 25px;
                color: #333;
            }
            .icon {
                margin-right: 5px;
            }
        }
    }
}
</style>
