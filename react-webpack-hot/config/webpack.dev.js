var  webpack=require('webpack');
var helper=require("./helper");
module.exports={
    devtool:"cheap-module-eval-source-map",
    entry:[
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        helper.root('src/index')
    ],
    output:{
        path:helper.root('dist'),
        filename:'bundle.js',
        publicPath:"/dist/"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel'],
            include: helper.root('src')
        }, {
            test: /\.css?$/,
            loader: 'style-loader!css-loader',
            include: helper.root('src')
        },{
            test:/\.(jpg|png)$/,
            loader:'url?limit=8192'
        }
        ]
    },
    plugins: [
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest:require('./../manifest.json')
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('development')
            }
        })
    ],
    resolve: {
        extensions: ['', '.js', '.json','.css','html']
    }

}