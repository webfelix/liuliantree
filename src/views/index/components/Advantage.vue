<!--
 * @Description:
 * @Date: 2021-02-04 20:41:43
-->
<template>
    <div class="home-advantage">
        <div class="see-container flex_box">
            <div
                v-for="(adv,index) in advList"
                :key="index"
                class="adv-item flex_box"
            >
                <img :src="adv.icon" class="adv-img">
                <div>
                    <div class="adv-tit">{{ adv.title }}</div>
                    <div class="adv-desc">{{ adv.desc }}</div>
                </div>
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
            advList: [
                {
                    icon: require('@/assets/images/adv1.png'),
                    title: '多渠道',
                    desc: '来自国内优秀资管机构、金融机构提供的优质债权，与国内优秀拍卖行、资产公司、律所深度合作'
                },
                {
                    icon: require('@/assets/images/adv2.png'),
                    title: '多渠道',
                    desc: '来自国内优秀资管机构、金融机构提供的优质债权，与国内优秀拍卖行、资产公司、律所深度合作'
                },
                {
                    icon: require('@/assets/images/adv3.png'),
                    title: '多渠道',
                    desc: '来自国内优秀资管机构、金融机构提供的优质债权，与国内优秀拍卖行、资产公司、律所深度合作'
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
.home-advantage {
    background: #fff;
    padding: 45px 0 20px;
    .adv-item {
        padding: 0 40px;
        align-items: flex-start;
        .adv-img {
            width: 64px;
            height: 64px;
            margin-right: 16px;
        }
        .adv-tit {
            margin-bottom: 10px;
            font-size: 20px;
        }
        .adv-desc {
            color: #7F7F7F;
        }
    }
}
</style>
