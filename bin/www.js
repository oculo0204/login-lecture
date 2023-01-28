"use strict"

//서버 실행시키는 코드
const PORT = 3000;
const app = require("../app");

app.listen(PORT, ()=>
{
    console.log("서버 가동");
});