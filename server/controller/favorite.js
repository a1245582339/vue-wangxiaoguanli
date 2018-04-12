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
 
// 获取课程收藏夹
exports.NewsFavorite = function(req, res, next) {
    req.models.news_favorite.find({ isDel: 0 }, function(err, list) {
      if (err) {
        throw err;
      } else {
        console.log(JSON.stringify(list));
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