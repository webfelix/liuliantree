<!--
 * @Description:banner
 * @Date: 2021-02-04 19:23:37
-->
<template>
    <div class="home-banner">
        <page-header />
        <swiper ref="mySwiper" :options="swiperOptions">
            <swiper-slide
                v-for="(bannerItem, index) in bannerList"
                :key="index"
                :style="{
                    backgroundImage: 'url(' + bannerItem.adv_image + ')'
                }"
            />
        </swiper>
        <div class="search-layout">
            <div class="see-container search-container flex_box">
                <div class="search-content">
                    <div class="search-sub-title">要找独家资产 还是榴莲树</div>
                    <div class="search-title">不良资产综合服务平台</div>
                    <div class="search-form">
                        <div class="search-tabs flex_box">
                            <div
                                v-for="tab in searchTabs"
                                :key="tab"
                                class="search-tab"
                                @click="curTab = tab"
                            >
                                {{ tab }}
                                <div class="arrow" :class="{show:curTab == tab}" />
                            </div>
                        </div>
                        <div class="search-form-cont">
                            <a-input class="search-form-input" placeholder="请输入关键字开始寻找优质资产" />
                            <div class="search-btn" @click="goSearch">搜索</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <home-notice />
    </div>
</template>
<script>
import PageHeader from './Header.vue';
import HomeNotice from './Notice.vue';
export default {
    name: 'HomeBanner',

    components: {
        PageHeader,
        HomeNotice
    },

    props: {},

    data() {
        return {
            swiperOptions: {
                autoplay: {
                    delay: 4000
                }
            },
            bannerList: [
                {
                    adv_image: require('@/views/index/img/banner03.jpg')
                },
                {
                    adv_image: require('@/views/index/img/banner04.jpg')
                }
            ],
            searchTabs: ['担保类', '抵押类', '招商推荐', '法拍通'],
            curTab: '担保类'
        };
    },

    computed: {},

    mounted() {},

    methods: {
        goSearch() {

        }
    }
};

</script>
<style lang='scss' scoped>
.home-banner {
    position: relative;
    height: 620px;
    .swiper-container {
        height: 100%;
    }
    .swiper-slide {
        background-size: auto 100%;
        background-position: 50%;
    }
    .search-layout {
        position: absolute;
        left: 0;
        right: 0;
        top: 95px;
        bottom: 50px;
        z-index: 5;
    }
    .search-container {
        height: 100%;
        color: #fff;
        .search-sub-title {
            font-size: 24px;
        }
        .search-title {
            font-weight: 700;
            font-size: 56px;
        }
        .search-form {
            margin-top: 50px;
        }
        .search-tab {
            position: relative;
            padding: 10px 20px;
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
        }
        .arrow {
            position: absolute;
            bottom: 0px;
            width: 0;
            height: 0;
            left: 50%;
            transform: translateX(-50%);
            color: #fff;
            content: "";
            border: 6px solid transparent;
            border-bottom: 9px solid #fff;
            z-index: 2;
            display: none;
            &.show {
                display: block;
            }
        }
        .search-form-cont {
            position: relative;
            .search-form-input {
                width: 628px;
                height: 60px;
                padding-left: 25px;
                padding-right: 145px;
                border-radius: 40px;
                border-color: #fff;
                &:focus {
                    border-color: #fff;
                }
            }
            .search-btn {
                position: absolute;
                right: 6px;
                top: 6px;
                width: 132px;
                height: 48px;
                line-height: 48px;
                background-color: #008080;
                text-align: center;
                border-radius: 40px;
                font-size: 16px;
                cursor: pointer;
            }
        }
    }
}
</style>
