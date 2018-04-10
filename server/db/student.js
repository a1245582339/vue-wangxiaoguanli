// 学生
module.exports = function(orm, db) {
    var student = db.define("student", {
      id: Number,
      stu_name: String,
      tel: String,
      balance: Number,
      reg_time: Number,
      ischecked:Number,
      sex: String,
      isDel: Number
    })
  };
  