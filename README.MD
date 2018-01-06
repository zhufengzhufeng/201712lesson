## http fs url
- 路由
- restful风格

## 中间件的特点
- next函数可以决定是否向下执行
- next函数可以传递错误 错误中间件有四个参数
- 可以将公共逻辑放到中间件内
- 中间件可以放路径,默认是/ 只要开头匹配即可
- req和res 可以再中间内封装一些公用方法 res.send()

## bodyParser
- 解析请求体 -> 对象 req.body

## express.static
```
app.use(static('./'));
```

## ejs渲染
- 渲染某个页面直接写文件名即可
```
res.render('hello.ejs');
```
