/*
 * @Description:
 * @Date: 2021-02-04 13:30:11
 */

import { importAll } from '@/utils/tools.js';

const storeModules = importAll(
    require.context('./modules', false, /\.js$/)
);

const configs = {};
storeModules.forEach(({ camelModuleName, module }) => {
    configs[camelModuleName] = module;
});

export default configs;
