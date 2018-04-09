
  // 模块列表
  module.exports = function (orm, db) {
    var order = db.define('order', {
        order_no       : Number,
        user_id        : Number,
        real_name      : String, 
        total          : Number,
        quantity       : Number,
        is_deleted     : Number,
        created_at     : Number
    })
  
    
};

