let fs = require('fs');
function read(cb){
  fs.readFile("./book.json","utf-8",function(err,books){
    if(err||books.length==0){
      cb([])
    }else{
      books = JSON.parse(books);
      cb(books);
    }
  })
}
function write(data,cb){
  fs.writeFile("./book.json",data,cb);
}
let slider = require("./sliders");
let express = require('express');
let app = express();
let bodyParser = require('body-parser');
app.listen(8501);
app.use(bodyParser.json()); // req.body
app.use(function (req,res,next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.setHeader("X-Powered-By",' 3.2.1');

  if(req.method=="OPTIONS") return res.end();
  next();
});
app.use(express.static('./'));
app.get('/slider',function (req,res) {
    res.json(slider);
});
app.get('/hot',function (req,res) {
  read(function(books){
    //处理逻辑  返回最新的8条数据
    books = books.reverse().slice(0,8);
    res.json(books);
  });
});
app.use(function (req,res,next) {
  req.id = req.query.id;
  next();
});
app.get('/book',function (req,res) {
  if(!isNaN(req.id)){
    read(function(books){
      let book =books.find(item=>{
        return item.id === id;
      });
      if(!book) book = {};
      res.json(book);
    })
  }else{
    read(function(books){
      res.json(books);
    });
  }
});

app.post('/book',function (req,res) {
    let book = req.body;
    read(function(books){
      book.id =  books.length>0?parseInt(books[books.length-1].id)+1:1;
      books.push(book);
      write(books, function () {
        res.json(books);
      })
    })
});
app.delete('/book',function (req,res) {

});
app.put('/book',function (req,res) {

});

// vue 背 声明式 
// react 函数式
