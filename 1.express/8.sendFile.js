let express = require('express');
let app = express();
app.listen(3000);
app.use(express.static('./')); // 静态文件中间件，express自带的功能
/*
app.get('/1.express.js',function (req,res) {
    // 发文件 sendFile 必须是一个绝对路径
    // res.sendFile(require('path').resolve('1.express.js'))
    res.sendFile('1.express.js',{root:__dirname});
});
*/
