
/*
 * @Description:
 */
const configPorxy = require('./config/proxy');
const Timestamp = new Date().getTime();
const vueConfig = {
    runtimeCompiler: true,
    lintOnSave: false,
    productionSourceMap: false,
    assetsDir: 'static',
    publicPath: '/',
    transpileDependencies: ['./src'],

    chainWebpack: config => {
        config.plugin('html').tap(args => {
            args[0].minify = false;
            return args;
        });

        if (process.env.npm_config_report) {
            config.plugin('webpack-bundle-analyzer').use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin);
        }
        if (process.env.NODE_ENV === 'production') {
            config.plugin('extract-css')
                .tap(args => [{
                    filename: `static/css/[name].${Timestamp}.css`,
                    chunkFilename: `static/css/[name].${Timestamp}.css`
                }]);
        }
    },
    configureWebpack: config => {
        config.optimization.splitChunks.chunks = 'all';// .chunkFilename = `static/js/[name].${Timestamp}.${process.env.NODE_ENV}.js`
        config.devtool = 'source-map';
        config.output.filename = `static/js/[name].${Timestamp}.${process.env.NODE_ENV}.js`;
        config.output.chunkFilename = `static/js/[name].${Timestamp}.${process.env.NODE_ENV}.js`;
    },
    css: {
        // 查看CSS属于哪个css文件
        sourceMap: process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'dev'
    },
    devServer: {
        port: 8088,
        open: true,
        hotOnly: true,
        proxy: configPorxy
    }
};

module.exports = vueConfig;
