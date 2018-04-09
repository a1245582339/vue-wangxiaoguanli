// token
module.exports = function(orm, db) {
    var token = db.define("token", {
      id: Number,
      token: String,
      deadline:Number,
      admin_id:Number
    });
  };
  