let app = {};
app.stack = [];
app.stack.push(function(req,res,next){
    console.log('中间件1');
    setTimeout(function(){
        next();
    },1000)
});
app.stack.push(function(req,res,next){
    console.log('中间件2');
    setTimeout(function(){
        next();
    },2000)
});
app.stack.push(function(req,res){
    console.log('路由');
});
let index = 0;
function next(){
    let fn = app.stack[index++];
    fn&&fn(null,null,next);
}
next(0);
