"use strict"; 
//아래는 ECMAScript 문법
const hello = (req, res)=>{
    res.render("home/index");
};
const login = (req, res)=>{
    res.render("home/login");
}

module.exports = {
    hello, 
    login,
};