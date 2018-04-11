// 获取管理员类型
exports.AdminRoles = function(req, res, next) {
    req.models.roles.find({ isDel: 0 }, function(err, list) {
      if (err) {
        res.json({ code: -1 });
      } else {
        res.json({code: 20000,data: list})
      }
    });
  };

// 获取管理员列表
exports.AdminList = function(req, res, next) {
    req.models.admin_user.find({ isDel: 0 }, function(err, list) {
      if (err) {
        res.json({ code: -1 });
      } else {
        var rolesIdArr = [];
        list.map((item, index) => {
            rolesIdArr[index] = item.roles_id;
          });
        var findPro = params =>
        new Promise((resolve, reject) =>
          req.models.roles.find(params, function(err, result) {
            err ? reject(err) : resolve(result);
          })
        ); // find的promise操作
        Promise.all(rolesIdArr.map((item, index) => findPro({ id: item }))).then(
            result => {
              result.map((item, index) => {
                list[index].roles_name = item[0].roles;
              });
              res.json({ title: "管理员列表", code: 20000, data: list });
            }
          );
      }
    });
  };

// 获取当前管理员
exports.PersonalAdmin = function(req, res, next) {
  var id=req.query[0]
  req.models.admin_user.find({ id: id }, function(err, list) {
    if (err) {
      res.json({ code: -1 });
    } else {
      req.models.roles.find({id:list[0].roles_id},function(err,_list){
        list[0].roles_name=_list[0].roles
        res.json({ title: "管理员列表", code: 20000, data: list });
      })
    }
  });
};
  
  // 删除管理员
  exports.DelAdmin = function(req, res, next) {
    var id = req.body.data;
  
    req.models.admin_user
      .find({ id: id })
      .each(function(list) {
        list.isDel = 1;
      })
      .save(function(err) {
        if (err) {
          res.json({ code: -1 });
        } else {
          res.json({ code: 20000, title: "删除成功" });
        }
      });
  };
  
// 修改管理员(新增和修改用的同一个接口，通过id判断)
exports.UpdateAdmin = function(req, res, next) {
  var id = req.body.id;
  if (!id) {
    req.models.admin_user.create(
      {
        name: req.body.name,
        roles_id: req.body.type,
        create_time: req.body.create_time,
        tel: req.body.tel,
        password: req.body.password,
        isDel: 0
      },
      function(err) {
        if (err) {
          throw err;
        }
        res.json({ code: 20000, title: "添加成功" });
      }
    );
  } else {
    req.models.admin_user
      .find({ id: id })
      .each(function(list) {
        list.name = req.body.name;
        list.roles_id = req.body.type;
        list.create_time = req.body.create_time;
        list.tel = req.body.tel;
        list.password = req.body.password
      })
      .save(function(err) {
        if (err) {
          res.json({ code: -1 });
        }
        res.json({ code: 20000 });
      });
  }
};