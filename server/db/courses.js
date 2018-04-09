// 课程
module.exports = function(orm, db) {
  var courses = db.define("courses", {
    id: Number,
    course_name: String,
    course_price: Number,
    course_class_id: Number,
    video_url: String,
    course_desp:String,
    isDel: Number
  })
};
