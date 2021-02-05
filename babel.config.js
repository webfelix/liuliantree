/*
 * @Description:
 * @Date: 2021-02-02 09:50:23
 */
module.exports = {
    presets: [
        '@vue/cli-plugin-babel/preset'
    ],
    'plugins': [
        [
            'import',
            { libraryName: 'ant-design-vue', libraryDirectory: 'es', 'style': 'css' }
        ]

    ]
};
