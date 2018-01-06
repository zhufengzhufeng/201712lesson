/**
 * 中间件
 * 是express里面最重要的概念
 *
 */
let {STATUS_CODES} = require('_http_server');
let express = require('express');
//请求体中间件 可以从请求对象中获取请求体，并且把请求体转成对象赋值给 req.都会返回一个函数，需要调用执行后才会返回真正的中间件函数
//第三方中间件
let bodyParser = require('body-parser');
let app = express();
//使用此中间件可以拿到 req.body={username:'zfpx',password:'123'}
// usernam
app.use(bodyParser.urlencoded({extended:false}));
/**
 * 1.给请求和响应对象添加一些公共的方法和属性
 * req.query req.path
 * 2. 进行一些公共的处理逻辑
 * 添加响应头
 */
//use方法可以添加中间件
//next是一个方法，调用它表示向后继续执行
app.use(function(req,res,next){
    res.setHeader('Content-Type',"text/html;charset=utf-8");
    setTimeout(function(){
       // next();//只有调用了next方法才表示次中间件执行完毕，可以继续执行下一个中间件或路由
       next();
    },1000)
});
app.use(function(req,res,next){
        console.log(1);
        next();
    //中间件里可能会发生错误
   /* try{
        throw Error('xxx');
    }catch(e){
        //next默认是没有参数的，如果传了参数就表示出错了。如果出错了会跳过所有后续的中间件和路由，会交给错误处理中间件来进行处理
        next(e);
    }*/

});
app.use(function(req,res,next){
    res.send1 = function(params){
        let type = typeof params;
        switch (type){
            case 'object':
                params = JSON.stringify(params);
                break;
            case 'number':
                //把数字当成状态码
                res.statusCode = params;
                params = STATUS_CODES[res.statusCode];
            default:
                break;
        }
        res.end(params);
    }
    next();
});
app.use(function(req,res,next){
    console.log(2);
    next();
});
//中间件是中间环节，处理完自己的逻辑后都还会往下走，走到路由里进行真正的业务处理
//路由是真正的最终的业务逻辑，到此结束，不会再往下走了
app.get('/user',function(req,res){
  res.end('用户');
});
app.get('/home',function(req,res){
    res.end('首页');
});
//用户注册
app.get('/signup',function(req,res){
  res.end(`
     <form method="post">
       <input type="text" name="username"/>
       <input type="text" name="password"/>
       <input type="submit"/>
    </form>
  `);
});
//application-x-form-urlencoded 表单格式 查询字符串格式
//username=zfpx&password=123456
//如何获取请求体
app.post('/signup',function(req,res){
   let body = req.body;
   console.log(body);
   //end只能接收字符串或者Buffer
    //send和end类似，也是写入响应体，并且结束响应。但是它可以接收任何类型的参数，比如对象 数字都可以
   //res.send(body);
   res.send(500);

});
//错误处理中间件，它和一般的中间件长的不一样，它有四个参数，多了一个 err
app.use(function(err,req,res,next){
    console.log(err);
    next(err);
});
app.use(function(err,req,res,next){
    console.log(err);
    next();
});
app.listen(8080);
