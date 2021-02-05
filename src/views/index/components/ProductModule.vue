<!--
 * @Description:商品组模块
 * @Date: 2021-02-04 21:12:04
-->
<template>
    <div class="product-module">
        <div class="see-container">
            <div class="flex_box_between">
                <div class="category-name">
                    <span class="name">债券类资产</span>
                    <span class="desc">优秀资管机构、金融机构提供优质债权，与优秀拍卖行、资产公司、律所深度合作</span>
                </div>
                <a href="/">更多</a>
            </div>
            <div class="goods-list clearfix">
                <goods-item />
                <goods-item />
                <goods-item />
                <goods-item />
            </div>
        </div>
    </div>
</template>

<script>
import GoodsItem from '@/components/business/goodsItem.vue';
export default {
    name: '',

    components: {
        GoodsItem
    },

    props: {
        productModule: {
            type: Object,
            default() {
                return {};
            }
        }
    },

    data() {
        return {

        };
    },

    computed: {},

    mounted() {},

    methods: {}
};

</script>
<style lang='scss' scoped>
.product-module {
    padding: 40px 0;
    background: #fff;
}
</style>
