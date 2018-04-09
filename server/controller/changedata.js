// 添加模块

exports.Add = function(req,res,next) {
    console.log(req.body)
    var newname         = req.body.name,
        newcategory_id  = req.body.category_id,
        newpirce        = req.body.price,
        newcoefficient  = req.body.coefficient,
        newdesp         = req.body.desp;
        newis_deleted   = req.body.is_deleted;
    req.models.product_info.create({name: newname,desp: newdesp,price: newpirce,category_id: newcategory_id,coefficient: newcoefficient,is_deleted:newis_deleted},function(err){
       if(err){ throw err}
    res.json({code: 20000,addlist: '添加模块:'+ newname})
 })
}

// 更改模块
exports.Update = function(req,res,next) {
    var oldname         = req.body.oldname,
        newname         = req.body.name,
        newcategory_id  = req.body.category_id,
        newprice        = req.body.price,
        newcoefficient  = req.body.coefficient,
        newdesp         = req.body.desp; 
    console.log(newname)
    req.models.product_info.find({name: oldname}).each(function(list){
       
       list.name = newname,
       list.desp = newdesp,
       list.price = newprice,
       list.coefficient = newcoefficient
      
    }).save(function(err){
        if(err){
            res.json({code: -1})
        }
        res.json({code:20000})
  })
}
// 删除模块
exports.Del = function(req,res,next) {
    var delname = req.body.data;
    console.log('要删除的模块名字：',delname)
    req.models.product_info.find({ name: delname }).each(function(list){

        list.is_deleted = 1

    }).save(function (err) {
        if(err){
            res.json({code: -1})
        }else{
            console.log('删除')
            res.json({code: 20000,title: "删除"})
        }
        
    });
}










// 删除模块
// exports.Del = function(req,res,next) {
//     var delname = req.body.data;
//     console.log('要删除的模块名字：',delname)
//     req.models.product_info.find({ name: delname }).remove(function (err) {
//         if(err){
//             res.json({code: -1})
//         }else{
//             console.log('删除')
//             res.json({code: 20000,title: "删除"})
//         }
        
//     });
// }


