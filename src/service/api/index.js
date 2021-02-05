import { importAll } from '@/utils/tools.js';

const routeModules = importAll(
    require.context('./modules', false, /\.js$/)
);

const configs = {};
routeModules.forEach(({ camelModuleName, module }) => {
    configs[camelModuleName] = module;
});

export default configs;
