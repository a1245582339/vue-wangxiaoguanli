// 获取学生列表
exports.StudentList = function(req, res, next) {
  req.models.student.find({ isDel: 0 }, function(err, list) {
    if (err) {
      res.json({ code: -1 });
    } else {
      res.json({ title: "学生列表", code: 20000, data: list });
    }
  });
};

// 审核学生
exports.CheckStudent = function(req, res, next) {
  var id = req.query[0];

  req.models.student
    .find({ id: id })
    .each(function(list) {
      list.ischecked = 1;
    })
    .save(function(err) {
      if (err) {
        res.json({ code: -1 });
      }
      res.json({ title: "审核成功", code: 20000 });
    });
};

// 删除学生
exports.DelStudent = function(req, res, next) {
  var id = req.body.data;

  req.models.student
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

// 修改学生
exports.UpdateStudent = function(req, res, next) {
  var id = req.body.id;
  console.log('req.body',req.body)
  req.models.student
    .find({ id: id })
    .each(function(list) {
      list.stu_name = req.body.name;
      list.balance = req.body.price;
      list.sex = req.body.typeName;
      list.tel = req.body.coefficient;
      console.log(JSON.stringify(list) )
    })
    .save(function(err) {
      if (err) {
        res.json({ code: -1 });
      } else {
        res.json({ code: 20000, title: "更改成功" });
      }
    });
};
