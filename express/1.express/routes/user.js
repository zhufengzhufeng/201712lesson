let express = require('express');
let router = express.Router(); //创建一个子路由函数
router.get('/',function (req,res) {
    res.send('user')
});
router.get('/login',function (req,res) {
    res.render('hello.html',{val:'我非常帅',a:'<h1>珠峰培训</h1>',school:{name:'zf',age:8}});
});

router.get('/reg',function (req,res) {
    res.send('注册');
});
module.exports = router;
