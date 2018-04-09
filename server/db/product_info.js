
  // 模块列表
module.exports = function (orm, db) {
    var product_info = db.define('product_info', {
        id             : Number,
        name           : String,
        price          : Number, // FLOAT
        desp           : String,
        category_id    : String,
        coefficient    : Number,
        is_deleted     : Number
    })
  
   
};


