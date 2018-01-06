let express = require('express');
let app = express();
app.listen(8080);

app.get('/baidu',function (req,res) {
    res.statusCode = 302;
    res.setHeader('Location','http://www.zhufengpeixun.cn');
    res.end();
    //res.redirect('http://www.zhufengpeixun.cn');
});