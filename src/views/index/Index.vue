<!--
 * @Description: 首页
 * @Date: 2021-02-02 10:05:47
-->
<template>
    <div class="home-index">
        <home-banner />
        <home-advantage />
        <product-module />
        <product-module />
        <product-module />
        <product-module />
        <home-partner />
    </div>
</template>

<script>
import HomeBanner from './components/Banner.vue';
import HomeAdvantage from './components/Advantage.vue';
import ProductModule from './components/ProductModule.vue';
import HomePartner from './components/Partner.vue';
export default {
    name: 'Home',

    components: {
        HomeBanner,
        HomeAdvantage,
        ProductModule,
        HomePartner
    },

    props: {},

    data() {
        return {

        };
    },

    computed: {},

    mounted() {},

    methods: {}
};

</script>
<style lang='scss'>
.category-name {
    position: relative;
    padding-left: 10px;
    margin-bottom: 20px;
    .name {
        font-size: 24px;
        font-weight: bold;
    }
    .desc {
        margin-left: 24px;
        color: #7f7f7f;
    }
    &::before {
        position: absolute;
        left: 0;
        top: 7px;
        content: '';
        width: 4px;
        height: 24px;
        border-radius: 2px;
        background-color: rgb(0, 128, 128);
    }
}
</style>
