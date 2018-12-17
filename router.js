//1.导包express
const express=require('express');
const c_user = require('./controllers/c_user');
//2.实例化路由
const router=express.Router();
//3.监听请求，实现函数
router
.get("/signin",c_user.showSignin)
.post('/signin',c_user.handleSignin);
//4.导出router
module.exports=router;