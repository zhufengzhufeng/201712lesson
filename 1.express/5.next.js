// 中间件的作用
// 1.next函数可以决定是否向下执行
// 2.next函数可以传递错误 错误中间件有四个参数
// 3.可以将公共逻辑放到中间件内
function app(req,res) {
    let index = 0;
    function next(err) {
        if(err){
            if(app.routes[index].length===4){
                app.routes[index](err,req,res,next)
            }else{
                index++; // 如果参数不是4个 并且有错误就继续向下执行
                next(err);
            }
        }else{
            app.routes[index++](req,res,next);
        }
    }
    next();
}
app.routes = [];
app.use = function (fn) {
    app.routes.push(fn)
};
app.use(function (req,res,next) {
    console.log(1);
    next('错误');
});
app.use(function (req,res,next) {
    console.log(2)
    next();
});
app.use(function () {
    console.log(3)
});
app.use(function (err,req,res,next) {
    console.log(err)
})
require('http').createServer(app).listen(3000);