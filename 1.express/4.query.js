let querystring = require('querystring');
let qs = require('qs');
let str = 'username=zfpx&age=9';
/*//req.body;
 //querystring是node自带的亲生模块
 let body1 = querystring.parse(str);//false
 //qs第三方的模块
 let body2 = qs.parse(str);//true
 console.log(body1);
 console.log(body2);*/
let obj = {name:'zfpx',home:{city:'北京'}};
console.log(obj);
//可以嵌套多层
let str3 = qs.stringify(obj);
console.log(str3);
//只能支持一层
let str4 = querystring.stringify(obj);
console.log(str4);
console.log(qs.parse(str3));
console.log(querystring.parse(str4));