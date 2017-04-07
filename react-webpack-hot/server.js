var webpack=require('webpack');
var webpackDevServer=require('webpack-dev-server');
var config=require('./config/webpack.dev.js');
new webpackDevServer(webpack(config),{
    publicPath:config.output.publicPath,
    historyApiFallback:true,
    hot:true,
    inline:true
}).listen(3000,'localhost',function(err,res){
        if(err)console.log(err);
        console.log('Listening port 3000');
    });