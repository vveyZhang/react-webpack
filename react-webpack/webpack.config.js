var webpack = require('webpack');
module.exports = {
    devtool:"cheap-module-eval-source-map",
    //页面入口文件配置
    entry: {
        index : './index.js'
    },
    //输入位置
    output:{
        path:'./dist',
        filename:'bundle.js'
    },
    module: {
        //加载器配置
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader'},
            { test: /\.(js|jsx)$/, loader: 'babel-loader', query: {presets: ['react','es2015','stage-0']}},
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
        ]
    },
    resolve: {
        extensions: ['.js', '.json','.css','html']
    },
    //插件项
    plugins: [
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest:require('./manifest.json')
        })
    ]
};