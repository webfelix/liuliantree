<!--
 * @Description:详情
 * @Date: 2021-02-05 15:12:44
-->
<template>
    <div class="project-info">
        <div class="project-name">乐视网信息技术股份有限公司商标1354项</div>
        <div class="project-flags">
            <span class="flag yellow">A类资产</span>
            <!-- <span class="flag teal">律师推荐</span> -->
            <span class="flag">180人&nbsp;报名</span>
            <span class="flag">18780人&nbsp;围观</span>
            <span class="flag">280人&nbsp;关注</span>
        </div>
        <div class="project-status flex_box_between">
            <div class="flex_box">
                <div class="sale-flag sale-flag--begin">即将开始</div>
                <div class="flex_box project-time">
                    <span class="time-label">结束时间</span>
                    <a-statistic-countdown :value="deadline" format="D 天 H 小时 m 分 s 秒" />
                </div>
            </div>
            <div class="favor">关注</div>
        </div>
        <div class="project-price">
            <div class="project-price__item flex_box">
                <span>起&ensp;始&ensp;价</span>
                <div class="price-box red"><span class="price-large">{{ 24567654.33 | fmoney }}</span>&nbsp;元</div>
                <div class="user">出价人：zds</div>
            </div>
            <div class="project-price__item  flex_box">
                <span>债权总额</span>
                <div class="price-box"><span class="price-large">{{ 567654.33 | fmoney }}</span>&nbsp;元</div>
            </div>
        </div>
        <!-- 待完善 -->
        <div class="project-input">
            <div class="price-formate">{{ 24567654.33 | convertCurrency }}</div>
            <div class="flex_box">
                <div class="form-input">
                    <a-input-number
                        v-model="offerPrice"
                        size="large"
                        :min="1"
                        :step="1"
                        class="input-number"
                    />
                </div>
                <div class="price-btn">竞价</div>
            </div>
        </div>
        <div class="user-info gray">
            <span class="m-r-20">我的竞买号&nbsp;Z3338</span>
            <span class="m-r-20">姓&emsp;名: 刘倩</span>
            <span>已&ensp;出&ensp;价: 2 次</span>
        </div>
        <info-detail />
    </div>
</template>

<script>
import InfoDetail from './ProjectInfoDetail.vue';
export default {
    name: 'ProjectInfo',

    components: {
        InfoDetail
    },

    props: {},

    data() {
        return {
            deadline: Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30,
            offerPrice: 10
        };
    },

    computed: {},

    mounted() {},

    methods: {}
};

</script>
<style lang='scss' scoped>
@import "@/assets/style/mixin.scss";
.m-r-20 {
    margin-right: 20px;
}
.project-info {
    padding: 0 50px 0 25px;
    .project-name {
        line-height: 34px;
        font-size: 32px;
        font-weight: bold;
        color: #333;
        @include text-overflow();
    }
    .project-flags {
        padding: 15px 0;
        color: #8c8c8c;
        border-bottom: 1px solid #f2f2f2;
        .flag {
            margin-right: 18px;
        }
    }
    .project-status {
        padding: 25px 0 30px;
        color: #7f7f7f;
        .project-time {
            margin-left: 18px;
        }
        .time-label {
            margin-right: 10px;
        }
        /deep/ .ant-statistic-content {
            font-size: 26px;
            color: #333;
            font-weight: bold;
        }
    }
    .project-price__item  {
        margin-bottom: 10px;
    }
    .price-box {
        min-width: 270px;
        text-align: right;
    }
    .price-large {
        font-size: 32px;
        font-weight: bold;
    }
    .user {
        margin-left: 20px;
        font-size: 12px;
    }
    .project-input {
        position: relative;
        padding: 35px 0 14px 0;
        .price-formate {
            position: absolute;
            top: 10px;
            color:  #007979;
        }
        .input-number {
            width: 250px;
            height: 50px;
            padding-left: 5px;
            border-radius: 4px 0 0 4px;
            border-color: #007979;
            &:focus {
                border-color: #007979;
            }
            /deep/ input {
                height: 50px;
                line-height: 50px;
                font-size: 16px;
                color:  #007979;
            }
        }
        .price-btn {
            width: 150px;
            height: 50px;
            line-height: 50px;
            text-align: center;
            color: #fff;
            font-size: 16px;
            border-radius: 0 4px 4px 0;
            background: #007979;
            cursor: pointer;
        }
    }
}
</style>
