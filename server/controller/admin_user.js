exports.Login = function(req, res, next) {
  let username = req.body.username,
      password = req.body.password;
  req.models.admin_user.find({ name: username }, function(err, list) {
    if(err){
        throw err;
    }else if(list.length==0){
        res.json({ code:-1, data: {message: '不存在该用户'}})
    }else if (list[0].password === password) {
      var timestamp = new Date().getTime();
      var deadline = timestamp+604800000;
      var admin_id = list[0].id
      req.models.token.create(
        { token: timestamp, deadline: deadline, admin_id: admin_id},
        function(err) {
          if (err) {
            console.log(err);
            throw err;
          }
          res.json({ code: 20000, data: { token: timestamp } });
        }
      );
    }else{
        res.json({ code:-1, data: {message: '密码错误'}})
    }
  });
};

exports.Logout = function(req, res, next) {
  res.json({ code: 20000 });
};

exports.Userinfo = function(req, res, next) {
    //console.log('req+++++',req.query.token)
    req.models.token.find({ token: req.query.token },function(err, list){
        if(err){
            throw err
        }else{
            var roles_id,roles,name,avatar,tel,sex;
            req.models.admin_user.find({id: list[0].admin_id}, function(err,_list){
                roles_id= _list[0].roles_id;
                name= _list[0].name;
                tel= _list[0].tel;
                sex= _list[0].sex;
                avatar: "";
                req.models.roles.find({id: roles_id},function(err,__list){
                    roles=__list[0].roles;
                    res.json({code: 20000, data: {roles: roles,name: name, avatar: avatar, tel:tel, sex:sex}})
                })
                
            })
        }
    })
//   res.json({
//     code: 20000,
//     data: { roles: ["admin"], role: ["admin"], name: "admin", avatar: "" }
//   });
};

// router.post('/user/login',function(req,res,next){
//     console.log(req.body)
//     let username = req.body.username,
//         password = req.body.password;
//     res.json({code: 20000,data: {token: "admin"}})
// })
// 退出*******************
// router.post('/user/logout',function(req,res,next){
//   res.json({code: 20000})
// })
// 获取个人信息************
// router.get('/user/info',function(req,res,next){
//     res.json({ code: 20000,data: {roles: ['admin'],role: ['admin'],name: 'admin',avatar: ''}
//     })
// })

// {"code":20000,"data":{"roles":["admin"],"role":["admin"],"name":"admin","avatar":"https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif"}}
