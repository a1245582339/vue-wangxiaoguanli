// 检查用户名是否已被注册
exports.CheckNameExist = function (req, res, next) {
  var name = req.query.name
  req.models.student.find({
    stu_name: name
  }, function (err, list) {
    if (err) {
      res.json({
        title: "校验失败",
        code: -1
      });
    } else if (list.length == 0) {
      res.json({
        title: "可以注册",
        code: 20000,
        data: 1
      });
    } else {
      res.json({
        title: "已被占用",
        code: 20000,
        data: 2
      });
    }
  })
};

// 用户注册
exports.Register = function (req, res, next) {
  var reg = req.body
  req.models.student.find({
    stu_name: reg.user_name
  }, function (err, list) {
    if (list.length == 0) {
      req.models.student.create({
        stu_name: reg.user_name,
        tel: reg.tel,
        balance: 0,
        avatar: "http://localhost:3000/stu_avatar/默认.jpg",
        create_time: Date.parse(new Date()) / 1000,
        ischecked: 0,
        sex: reg.sex,
        password: reg.password,
        isDel: 0,
      }, function (err) {
        res.json({
          title: "注册成功",
          code: 20000
        });
      })
    } else {
      res.json({
        title: "已被占用",
        code: -1
      });
    }
  })
}

// 用户登录
exports.Login = function (req, res, next) {
  var log = req.body
  req.models.student.find({
    stu_name: log.user_name,
    password: log.password
  }, function (err, list) {
    if (list.length == 0) {
      res.json({
        title: "登录失败",
        code: -1
      });
    } else {
      var timestamp = new Date().getTime();
      var deadline = timestamp + 604800000;
      var stu_id = list[0].id
      req.models.stu_token.create({
          token: timestamp,
          deadline: deadline,
          stu_id: stu_id
        },
        function (err) {
          if (err) {
            res.json({
              title: "token创建异常",
              code: -1
            });
          }
          res.json({
            code: 20000,
            data: {
              token: timestamp
            }
          });
        }
      );
    }
  })
}

// 根据token拉用户信息
exports.GetInfo = function (req, res, next) {
  var token = req.query.token
  console.log(req.query)
  req.models.stu_token.find({
    token: token
  }, function (err, list) {
    if(err){
      res.json({
        code: -1,
        list:"错误"
      });
    }
    var stu_id=list[0].stu_id
    req.models.student.find({id:stu_id},function(err,list){
      res.json({
        code: 20000,
        data: list
      });
    })
  })
}