let express = require('express');
let app = express();
app.listen(3000);
// 中间件可以放路径,默认是/ 只要开头匹配即可
// req和res 可以再中间内封装一些公用方法 res.send()
app.use('/',function (req,res,next) {
    console.log('home');
    next();
});
app.get('/home/list',function (req,res) {
    res.end('list')
});