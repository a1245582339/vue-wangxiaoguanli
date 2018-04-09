
   //  订单里的每个模块
  module.exports = function (orm, db) {
    var order_desp = db.define('order_desp', {
        order_no       : Number, //必填
        created_at     : Number,
        is_deleted     : Number, 
        order_id       : Number,
        price          : Number,
        product_id     : String,
        name           : String,
        category_id    : Number
    })
  
    
};



