// 课程
module.exports = function(orm, db) {
    var news_visit_log = db.define("news_visit_log", {
      news_id: Number,
      stu_id: Number,
      create_time:Number,
    })
  };
  