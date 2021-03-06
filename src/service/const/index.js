/*
 * @Description:
 * @Date: 2021-02-04 13:30:11
 */
import { importAll } from '@/utils/tools.js';

const routeModules = importAll(
    require.context('./modules', false, /\.js$/)
);

const configs = {};
routeModules.forEach(({ camelModuleName, module }) => {
    configs[camelModuleName] = module;
});

export default configs;
