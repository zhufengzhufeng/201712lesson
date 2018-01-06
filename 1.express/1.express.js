/**
 * express是一个NODE模块
 * 1. 路由功能
 */
//express是一个函数，可以执行
let express = require('express');
//执行后的返回结果还是一个函数
let app = express();
console.log(app);
//app有一个方法叫get,通过它可以定义一条路由规则,1参数是这个路由的路径，第二个参数是回调函数
app.get('/signup',function (req,res) {
    res.end('signup');
});
//当客户端通过POST方法向服务器发送 /signup请求的时候
app.post('/signup',function(req,res){
    res.end('post signup');
});
//有多个HTTP请求方法名，就有多少方法
app.get('/signin',function (req,res) {
    res.end('signin');
});
//all能匹配所有的方法名 *可以匹配所有的路径
app.all('*',function(req,res){
    res.end('404');
});
//监听8080端口
app.listen(8080);

app.listen = function listen(port) {
    var server = http.createServer(app);
    server.listen(port);
};
