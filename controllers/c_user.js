// 1. 导包
var mysql = require('mysql');
// 2. 配置
var connection = mysql.createConnection({
    // 主机
    host: 'localhost',
    // 用户名
    user: 'root',
    // 密码
    password: 'root',
    // 数据库名字
    database: 'news'
});

// 3. 开启连接
connection.connect();

//渲染登陆页面
exports.showSignin = (req,res)=>{
    res.render("signin.html");
};
//处理登陆请求
exports.handleSignin=(req,res)=>{
    //1.获取表单数据
    const body = req.body;
    console.log(body);
    //2.先验证邮箱
    //1.安装mysql
    //2.配置
    //3.查询数据库
    const sql='select*from `users` where email=?';
    connection.query(sql,body.email,(err,data)=> {
        if(err){
            throw err;
        }
        console.log(data);
        //如果邮箱没有 data=[]
        if(data.length===0){
            res.send({
                code:1,
                msg:"邮箱不存在"

            });

        }

        //3.验证该邮箱对应的数据密码是否正确
        //判断数据库的密码和body.password
        if(data[0].password!==body.password){
            return res.send({
                code:2,
                msg:'密码错误'
            })
        }
        
        //4.返回200状态码
        res.send({
            code:200,
            msg:"密码正确,已登录"
        })


    })
}