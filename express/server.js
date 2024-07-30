let http = require('http');
let url = require('url');
let fs = require('fs');
let path = require('path'); // resolve join
// 1.写接口 /signin 登录 2.访问/signup 注册  访问静态文件可以返回静态文件
http.createServer(function (req,res) { // 监听函数 监听请求到来的函数
    if (path.normalize(decodeURI(req.url)) !== decodeURI(req.url)) {
        res.statusCode = 403;
        res.end();
        return;
    }
    // 处理url req.url req.headers req.method
    let {pathname,query} = url.parse(req.url,true);
    // 当前访问的文件是什么类型的

    if(pathname === '/signin'){

    }

    fs.stat('.'+pathname,function (err,stat) {
        if(err){
            res.statusCode = '404';
            res.end('NOT FOUND');
        }else{
            if(stat.isDirectory()){
                res.setHeader('Content-type','text/html;charset=utf8');
                fs.readFile(path.join('.'+pathname,'index.html'),function (err,data) {
                    res.end(data);
                });
            }else{ // mime模块....
                fs.readFile('.'+pathname,function (err,data) {
                    res.end(data);
                });
            }
        }
    });

}).listen(3000);
//stat 文件的状态
/*
fs.stat('./js/43567.js',function (err,stat) { // err first
    if(err){ // 如果有错误 直接返回404

    }else{
        if(stat.isDirectory()){
            console.log('是文件夹')
        }else{
            console.log('是文件')
        }
    }
})*/
