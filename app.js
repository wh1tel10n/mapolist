//모듈 임포트
var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');
var path = require('path');
var port = 3000;

app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');
app.use(express.static('./pubic'));

// var mainRouter = require('./router/main.js');
// app.use(mainRouter);

app.listen(port,()=>{
    console.log('서버가 시작되었습니다');
});

app.get("/",function(req,res){
    res.send("Hello SungMin");
});