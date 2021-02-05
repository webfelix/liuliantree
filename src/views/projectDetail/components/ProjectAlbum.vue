<!--
 * @Description: 图片相册
 * @Date: 2021-02-05 14:29:23
-->
<template>
    <div class="project-album">
        <img-view v-if="showImgView" :img-url="activeImg" @closeView="showImgView=false" />
        <div class="swiper-container--display flex_box">
            <img :src="activeImg" @click="showImgView=true">
        </div>
        <swiper ref="swiperThumbs" class="swiper-container--thumbs" :options="swiperOptionsThumbs">
            <swiper-slide
                v-for="(imgItem, index) in imgList"
                :key="'thumbs-'+index"
                :style="{
                    backgroundImage: 'url(' + imgItem + ')'
                }"
                @click.native="onThumbs(index)"
            />
        </swiper>
        <!-- <div class="project-notice flex_box">
            <div class="notice-label gray">资产动态</div>
            <swiper ref="mySwiper" class="flex_cell_primary swiper-container--notice" :options="swiperOptionsNotice">
                <swiper-slide
                    v-for="(notice, index) in notices"
                    :key="index"
                >{{ notice.content }}</swiper-slide>
            </swiper>
        </div> -->
    </div>
</template>

<script>
import ImgView from '@/components/common/AppImgView.vue';
export default {
    name: '',

    components: {
        ImgView
    },

    props: {
        imgList: {
            type: Array,
            required: true
        }
    },

    data() {
        return {
            activeIndex: 0,
            showImgView: false,
            swiperOptionsThumbs: {
                spaceBetween: 10,
                slidesPerView: 5,
                freeMode: true,
                watchSlidesVisibility: true,
                watchSlidesProgress: true
            },
            swiperOptionsNotice: {
                autoplay: {
                    delay: 4000
                },
                direction: 'vertical'
            },
            notices: [
                {
                    content: '为答谢广大会员过去一直以来对我中心的支持和信赖，中心特推出2020“关爱回馈年”活动，'
                },
                {
                    content: '为答谢广大会员过去一直以来对我中心的支持和信赖，中心特推出2020“关爱回馈年”活动，'
                },
                {
                    content: '为答谢广大会员过去一直以来对我中心的支持和信赖，中心特推出2020“关爱回馈年”活动，'
                }
            ]
        };
    },

    computed: {
        activeImg() {
            return this.imgList[this.activeIndex];
        }
    },

    mounted() {

    },

    methods: {
        onThumbs(index) {
            this.activeIndex = index;
        }
    }
};

</script>
<style lang='scss' scoped>
.project-album {
    .swiper-container--display {
        width: 680px;
        height: 524px;
        border-radius: 4px;
        overflow: hidden;
        img {
            height: 100%;
            width: 100%;
        }
    }
    .swiper-container--thumbs {
        width: 680px;
        height: 78px;
        margin-top: 7px;
    }
    .swiper-slide {
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        cursor: pointer;
    }
    .swiper-container--notice {
        height: 50px;
        line-height: 50px;
        margin-left: 10px;
        .swiper-slide {
            width: 100%;
            overflow: hidden;
            cursor: pointer;
            color: #333;
        }
    }
    .notice-label {
        margin-top: -1px;
    }
}
</style>
