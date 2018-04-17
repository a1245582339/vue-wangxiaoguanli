// 获取课程收藏夹
exports.CourseFavorite = function(req, res, next) {
  req.models.course_favorite.find({ isDel: 0 }, function(err, list) {
    if (err) {
      throw err;
    } else {
      var findcourse = params =>
        new Promise((resolve, reject) =>
          req.models.course.find(params, function(err, result) {
            err ? reject(err) : resolve(result);
          })
        );
      var course_name = Promise.all(
        list.map(item => findcourse({ id: item.course_id }))
      ).then(res => {
        return res;
      });
      var findstu = params =>
        new Promise((resolve, reject) =>
          req.models.student.find(params, function(err, result) {
            err ? reject(err) : resolve(result);
          })
        );
      var student_name = Promise.all(
        list.map(item => findstu({ id: item.stu_id }))
      ).then(res => {
        return res;
      });
      Promise.all([course_name, student_name]).then(result => {
        result[0].map((item, index) => {
          list[index].course_name = item[0].course_name;
        });
        result[1].map((item, index) => {
          list[index].stu_name = item[0].stu_name;
        });
        res.json({ code: 20000, title: "课程收藏夹", data: list });
      });
    }
  });
};

// 获取资讯收藏夹
exports.NewsFavorite = function(req, res, next) {
  req.models.news_favorite.find({ isDel: 0 }, function(err, list) {
    if (err) {
      throw err;
    } else {
      var findnews = params =>
        new Promise((resolve, reject) =>
          req.models.news.find(params, function(err, result) {
            err ? reject(err) : resolve(result);
          })
        );
      var news_name = Promise.all(
        list.map(item => findnews({ id: item.news_id }))
      ).then(res => {
        return res;
      });
      var findstu = params =>
        new Promise((resolve, reject) =>
          req.models.student.find(params, function(err, result) {
            err ? reject(err) : resolve(result);
          })
        );
      var student_name = Promise.all(
        list.map(item => findstu({ id: item.stu_id }))
      ).then(res => {
        return res;
      });
      Promise.all([news_name, student_name]).then(result => {
        result[0].map((item, index) => {
          list[index].news_name = item[0].news_name;
        });
        result[1].map((item, index) => {
          list[index].stu_name = item[0].stu_name;
        });
        res.json({ code: 20000, title: "课程收藏夹", data: list });
      });
    }
  });
};

// 根据id获取课程收藏夹
exports.GetCourseFavoriteById = function(req, res, next) {
  var stu_id = req.query.stu_id;

  req.models.course_favorite.find({ stu_id: stu_id }, function(err, list) {
    if (err) {
      throw err;
    } else {
      list.map((item, index) => {
        if (item.isDel == 1) {
          list.splice(index, 1);
        }
      });

      var findcourse = params =>
        new Promise((resolve, reject) =>
          req.models.course.find(params, function(err, result) {
            err ? reject(err) : resolve(result);
          })
        );
      var course_name = Promise.all(
        list.map(item => findcourse({ id: item.course_id }))
      ).then(res => {
        return res;
      });
      var findstu = params =>
        new Promise((resolve, reject) =>
          req.models.student.find(params, function(err, result) {
            err ? reject(err) : resolve(result);
          })
        );
      var student_name = Promise.all(
        list.map(item => findstu({ id: item.stu_id }))
      ).then(res => {
        return res;
      });
      Promise.all([course_name, student_name]).then(result => {
        result[0].map((item, index) => {
          list[index].course_name = item[0].course_name;
        });
        result[1].map((item, index) => {
          list[index].stu_name = item[0].stu_name;
        });
        res.json({ code: 20000, title: "课程收藏夹", data: list });
      });
    }
  });
};

// 根据id获取资讯收藏夹
exports.GetNewsFavoriteById = function(req, res, next) {
  var stu_id = req.query.stu_id;
  req.models.news_favorite.find({ isDel: 0 }, function(err, list) {
    if (err) {
      throw err;
    } else {
      list.map((item, index) => {
        if (item.isDel == 1) {
          list.splice(index, 1);
        }
      });
      var findnews = params =>
        new Promise((resolve, reject) =>
          req.models.news.find(params, function(err, result) {
            err ? reject(err) : resolve(result);
          })
        );
      var news_name = Promise.all(
        list.map(item => findnews({ id: item.news_id }))
      ).then(res => {
        return res;
      });
      var findstu = params =>
        new Promise((resolve, reject) =>
          req.models.student.find(params, function(err, result) {
            err ? reject(err) : resolve(result);
          })
        );
      var student_name = Promise.all(
        list.map(item => findstu({ id: item.stu_id }))
      ).then(res => {
        return res;
      });
      Promise.all([news_name, student_name]).then(result => {
        result[0].map((item, index) => {
          list[index].news_name = item[0].news_name;
        });
        result[1].map((item, index) => {
          list[index].stu_name = item[0].stu_name;
        });
        res.json({ code: 20000, title: "课程收藏夹", data: list });
      });
    }
  });
};

// 删除课程收藏夹记录
exports.DelCourseFav = function(req,res,next){
  var id = req.body.id;
  console.log(JSON.stringify(req.body))
  req.models.course_favorite.find({id:id}).each(function(list){
    console.log(list)
    list.isDel = 1
  }).save(function(err){
    if(err){
      res.json({code:-1})
    }else{
      res.json({ code: 20000, title: "删除成功" });
    }
  })
}

// 删除资讯收藏夹记录
exports.DelNewsFav = function(req,res,next){
  var id = req.body.id;
  req.models.news_favorite.find({id:id}).each(function(list){
    list.isDel = 1
  }).save(function(err){
    if(err){
      res.json({code:-1})
    }else{
      res.json({ code: 20000, title: "删除成功" });
    }
  })
}