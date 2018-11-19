module.exports = {
    plugins: [
        require('postcss-easy-import'),
        require('precss'),
        require('postcss-flexbugs-fixes'),
        require('postcss-preset-env')({
            autoprefixer: {
                flexbox: 'no-2009',
            },
            stage: 0,
        }),
    ]
}