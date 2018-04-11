// 学生
module.exports = function(orm, db) {
    var student = db.define("student", {
      id: Number,
      stu_name: String,
      tel: String,
      balance: Number,
      create_time: Number,
      ischecked:Number,
      sex: String,
      isDel: Number
    })
  };
  