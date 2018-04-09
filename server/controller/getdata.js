
// var orm = require('orm')
// 获取所有列表
exports.Alldata = function(req,res,next) {
    req.models.product_info.find({is_deleted: '0'},function(err,lists){
        //  console.log(lists[0].name)
        if(err){
           res.json({'result': -1})
        }
         res.json({ 'title': 'alllist','code':20000, data: lists});
    })
}
// 获取基本模块列表
exports.Basedata = function(req,res,next) {
    req.models.product_info.find({category_id:'0',is_deleted: '0'},function(err,lists){
        //  console.log(lists[0].name)
         res.json({ code: 20000,title: 'baseList',data: lists});
    })
}
// 获取可选模块
exports.Choosedata = function(req,res,next) {
    req.models.product_info.find({category_id:'1',is_deleted: '0'},function(err,lists){
        //  console.log(lists[0].name)
         res.json({ code: 20000,title: 'chooseList',data: lists});
    })
}
// 获取独立模块
exports.Owndata = function(req,res,next) {
    req.models.product_info.find({category_id:'2',is_deleted: '0'},function(err,lists){
        //  console.log(lists[0].name)
         res.json({ code: 20000,title: 'ownList',data: lists});
    })
}

