let express = require('express');
let app = express();
let path = require('path');
let fs = require('fs');
app.listen(3000);
function static(pathname) {
    return function (req,res,next) {
        let p = path.join(pathname, req.path);
        fs.stat(p,function (err,stat) {
            if(err){ //文件不是静态文件
                next();
            }else{
                //res.setHeader = res.header
                res.header('content-type','application/javascript;charset=utf8');
                fs.readFile(p,function (err,data) {
                    res.end(data);
                });
            }
        });
    }
}
// app.use(express.static('./')); //可以设置多个
app.use(static('./')); // 静态文件中间件，express自带的功能
/*
app.get('/1.express.js',function (req,res) {
    // 发文件 sendFile 必须是一个绝对路径
    // res.sendFile(require('path').resolve('1.express.js'))
    res.sendFile('1.express.js',{root:__dirname});
});*/
