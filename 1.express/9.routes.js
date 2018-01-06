
// 用户类 /login /reg
// 发表文章 /add /del
let express = require('express');
let user = require('./routes/user');
let art = require('./routes/article');
let app = express();
app.listen(3000);
app.use('/user',user);
app.use('/article',art);
app.get('/user',function (req,res) {
    res.send('home');
});
// 模板引起 underscore,handlebar 模板引起 {{}}

// express + jade/ejs