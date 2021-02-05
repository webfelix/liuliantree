<!--
 * @Description:
 * @Date: 2021-02-02 09:50:23
-->

<template>
    <div id="app">
        <page-header v-if="!$route.meta.hideHeader" />
        <router-view />
        <page-footer />
    </div>
</template>
<script>
import PageHeader from './components/business/header.vue';
import PageFooter from './components/business/footer.vue';
export default {
    components: {
        PageHeader,
        PageFooter
    },

    props: {},

    data() {
        return {

        };
    },

    computed: {

    },

    methods: {}
};
</script>

<style  lang='scss' scoped>
#app {
    position: absolute;
    flex-direction: row;
    left: 0;
    top: 0;
    display: block;
    width: 100%;
    height: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>

