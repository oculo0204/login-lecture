"use strict"; 
//메인 파일

//모듈
const express = require("express");//require -> 경로 연결 메소드
const app = express();

//라우팅
const home = require("./routes/home"); //이 경로에 있는 js를 읽어와줘 

//view 세팅(앱 세팅)
app.set("views", "./views"); //현재 view 위치
app.set("view engine", "ejs"); //view 엔진 세팅

app.use("/", home); //use -> 미들웨어 등록 메소드
//여기서는 router연결

module.exports = app;