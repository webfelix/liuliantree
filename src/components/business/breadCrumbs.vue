<!--
 * @Description: 面包屑
 * @Date: 2021-02-05 13:31:21
-->
<template>
    <div class="bread-crumbs">
        <a-breadcrumb :routes="routes">
            <template slot="itemRender" slot-scope="{ route, params, routes, paths }">
                <span v-if="routes.indexOf(route) === routes.length - 1">
                    {{ route.breadcrumbName }}
                </span>
                <router-link v-else :to="`${basePath}/${paths.join('/')}`">
                    {{ route.breadcrumbName }}
                </router-link>
            </template>
        </a-breadcrumb>
    </div>
</template>

<script>
export default {
    name: '',

    components: {},

    props: {
        routes: {
            type: Array,
            default() {
                return [];
            }
        }
    },

    data() {
        return {
            basePath: '/components/breadcrumb'
        };
    },

    computed: {},

    mounted() {},

    methods: {}
};

</script>
<style lang='scss' scoped>

</style>
