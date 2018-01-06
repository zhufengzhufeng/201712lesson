
// 用户类 /login /reg
// 发表文章 /add /del
let express = require('express');
let user = require('./routes/user');
let art = require('./routes/article');
let app = express();
app.listen(3000);
app.use('/user',user);
app.use('/article',art);
// 设置引擎是html后缀的但是用ejs来渲染
app.engine('html',require('ejs').__express);
app.get('/user',function (req,res) {
    res.send('home');
});
// 模板引起 underscore,handlebar 模板引起 {{}}

// express + jade/ejs