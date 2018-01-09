/**
 * params  参数的获取
 * 请求的格式
 * 请求行 方法名 请求路径 协议/版本号
 * 请求头
 * 请求体
 */
let express = require('express');
let app = express();
//这里的请求对象和响应对象和原生服务器里面的对象是一样的，只不过express扩展了一些属性
// http://localhost:8080/user?id=1
//url=/user?id=1

app.get('/user',function(req,res){
    console.log(req.method);//请求的方法名
    console.log(req.url);//请求路径，完整的路径，包含了请求路径和查询字符串
    console.log(req.path);//路径名/user
    console.log(req.query);//id=1=>{id:1}
    console.log(req.headers);//请求头对象
    res.send('ok');
});
//路径参数 放在路径里的参数
//params的属性名来自于冒号后面的字符串，值来自于客户端访问的路径
app.get('/users/:id/:name',function(req,res){
    console.log(req.params);
    let id = req.params.id;
    res.end(id);
});
app.listen(8080);