// 用户
module.exports = function(orm, db) {
  var admin_user = db.define("admin_user", {
    id: Number,
    name: String,
    roles_id: String,
    tel: String,
    //created_time: String,
    sex: String,
    password:String
  });
};
