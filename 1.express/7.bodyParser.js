let express = require('express');

let app = express();

app.listen(3000);
// 表单 username=admin&password=456
// ajax{"username":"123","password":"456"}

// 多层情况下基本上能用方法实现的都是浅拷贝slice,Object.assign.深拷贝递归循环 / JSON.parse(JSON.stringify(obj)) 不支持函数
/*function bodyParser() {  // 自己写中间件一般都是函数返回函数，目的是为了传递参数
    return function (req,res,next) {
        req.body = {};
        let str = '';
        req.on('data',function (chunk) {
            str+=chunk;
        });
        req.on('end',function () {
           if(req.headers['content-type'] === 'application/json'){
               Object.assign(req.body,JSON.parse(str))
           }else if(req.headers['content-type']==='application/x-www-form-urlencoded'){
               Object.assign(req.body, require('querystring').parse(str));
           }
           next();// req.on是异步的
        })
    }
}*/
let bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.post('/signin',function (req,res) {
   console.log(req.body);
   res.send(req.body);
});



// 浅拷贝 和 深拷贝 slice是浅拷贝
/*let n = [2,3,4];
let arr = [1,n];
let newArr = arr.slice();
n[0] = 100;
console.log(newArr);*/
