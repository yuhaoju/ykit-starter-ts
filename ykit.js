module.exports = {
    plugins: ['ts'],
    config: {
        exports: [
            './scripts/index.ts',
            './styles/index.css'
        ],
        modifyWebpackConfig: function(baseConfig) {
            // edit ykit's Webpack configs
            return baseConfig;
        }
    },
    hooks: {},
    commands: []
};
