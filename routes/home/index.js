"use strict"; //ECMAScript의 문법을 준수하겠다고 명시하는 것

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.hello);
router.get("/login", ctrl.login);

module.exports = router;
//외부로 내보내기