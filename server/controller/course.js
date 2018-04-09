// 获取课程列表
exports.CourseList = function(req, res, next) {
  req.models.courses.find({ isDel: 0 }, function(err, list) {
    if (err) {
      throw err;
    } else {
      var classIdArr = [];
      var classArr = [];
      list.map((item, index) => {
        classIdArr[index] = item.course_class_id;
      });
      var findPro = params =>
        new Promise((resolve, reject) =>
          req.models.course_class.find(params, function(err, result) {
            err ? reject(err) : resolve(result);
          })
        ); // find的promise操作
      Promise.all(classIdArr.map((item, index) => findPro({ id: item }))).then(
        result => {
          result.map((item, index) => {
            list[index].course_class_name = item[0].course_class_name;
          });
          res.json({ title: "coursesList", code: 20000, data: list });
        }
      );
    }
  });
};

// 删除课程
exports.DelCourse = function(req, res, next) {
  var id = req.body.data;

  req.models.courses
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

// 获取课程类型列表
exports.CourseClass = function(req,res,next) {
  req.models.course_class.find({ isDel: 0 },function(err,list){
    console.log("list", JSON.stringify(list));
    if(err){
      throw err
    }else{
      res.json({code :20000,title: '课程类型', data: list})
    }
  })
}