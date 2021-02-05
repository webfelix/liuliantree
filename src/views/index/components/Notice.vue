<!--
 * @Description: 公共
 * @Date: 2021-02-04 20:59:36
-->
<template>
    <div class="home-notice">
        <div class="see-container flex_box">
            <img src="@/assets/images/notice_white.svg" alt="">
            <swiper ref="mySwiper" class="flex_cell_primary" :options="swiperOptions">
                <swiper-slide
                    v-for="(notice, index) in notices"
                    :key="index"
                >{{ notice.content }}</swiper-slide>
            </swiper>
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
            swiperOptions: {
                autoplay: {
                    delay: 4000
                },
                direction: 'vertical'
            },
            notices: [
                {
                    content: '公告：为答谢广大会员过去一直以来对我中心的支持和信赖，中心特推出2020“关爱回馈年”活动，'
                },
                {
                    content: '公告：为答谢广大会员过去一直以来对我中心的支持和信赖，中心特推出2020“关爱回馈年”活动，'
                },
                {
                    content: '公告：为答谢广大会员过去一直以来对我中心的支持和信赖，中心特推出2020“关爱回馈年”活动，'
                }
            ]
        };
    },

    computed: {},

    mounted() {},

    methods: {}
};

</script>
<style lang='scss' scoped>
.home-notice {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0);
    background-image: linear-gradient(-180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.58) 100%);
    z-index: 100;
    .swiper-container {
        height: 50px;
        line-height: 50px;
        margin-left: 10px;
        color: #fff;
        .swiper-slide {
            width: 100%;
            overflow: hidden;
            cursor: pointer;
            &:hover {
                color: teal;
            }
        }
    }
}

</style>
