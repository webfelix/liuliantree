/*
 * @Description:接口代理
 * @Date: 2020-10-15 16:05:39
 */

const currentEnv = 'dev';

const HOST = {
    dev: 'https://devcloud.seeyon.com/',
    prod: 'https://vprodcloud.seeyon.com/'
};

module.exports = {
    '/transfer': {
        target: HOST[currentEnv],
        changeOrigin: true
    }
};

