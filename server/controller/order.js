
var async = require('async');

// 获取订单
exports.Getorder = function(req,res,next) {
    req.models.order.find({is_deleted: '0'},function(err,lists){
        //  console.log(lists[0].name)
         res.json({ code: 20000,title: 'allorder',data: lists});
    })
}
// 提交订单
exports.Addorder = function(req,res,next) {
     console.log(req.body)
    //  取得的数据都是所选模块的ID数组
         // 服务器类型
     var servertype      = req.body.servertype,
        //  人数
         truePersonNum   = req.body.truenum,
        //  基础模块
         basemodules     = req.body.basemodules,
        //  可选模块
         choosemodules   = req.body.choosemodules,
        //  独立子模块
         ownmodules      = req.body.ownmodules;
         
        // var NumberTime   = 1000555;
        // var NumberTime = new Date().getTime();
        var NumberTime = Math.round(new Date());
        var NumberId   = Math.random().toString().slice(2,8);
        
        // Promise.all([a,b]).then(objArray => )
        var find = params => new Promise((resolve,reject) => req.models.product_info.find(params, function(err,result){
            err ? reject(err) : resolve(result);
        }))
        // 获取基础模块的价格和系数和
        var baseMes = Promise.all(basemodules.map(item =>find({id:item})))
            .then(ret => {
                return ret.reduce((acc, current) => {
                    return {...acc, sum: current[0].price + acc.sum, c: current[0].coefficient + acc.c}
                }, {type: 'baseMes', sum: 0, c:0})
            })

        //获取可选模块的价格和系数和
        var chooseMes = Promise.all(choosemodules.map(item =>find({id:item})))
            .then(ret => {
                
                return ret.reduce((acc, current) => {
              // 保存模块************
               
                var order_no      = NumberTime,
                    order_id      = NumberId,
                    created_at    = NumberTime,
                    price         = current[0].price,
                    newis_deleted = 0,
                    product_id    = current[0].id,
                    name          = current[0].name,
                    category_id   = current[0].category_id;
                req.models.order_desp.create({order_no: order_no,order_id: order_id,price: price,product_id: product_id,is_deleted:newis_deleted,created_at:created_at,name: name,category_id:category_id},function(err){
                    if(err){ throw err}
                    
                 })
                return {...acc, sum: current[0].price + acc.sum, c: current[0].coefficient + acc.c}
                }, {type: 'chooseMes', sum: 0, c:0})
            })

        // 获独立自模块的价格和
        var ownMes = Promise.all(ownmodules.map(item =>find({id:item})))
            .then(ret => {
                return ret.reduce((acc, current) => {
                     // 保存模块************
        
                var order_no      = NumberTime,
                    order_id      = NumberId,
                    created_at    = NumberTime,
                    price         = current[0].price,
                    newis_deleted = 0,
                    product_id    = current[0].id,
                    name          = current[0].name,
                    category_id   = current[0].category_id;
                req.models.order_desp.create({order_no: order_no,order_id: order_id,price: price,product_id: product_id,is_deleted:newis_deleted,created_at:created_at,name: name,category_id: category_id},function(err){
                    if(err){ throw err}
                    
                 })
                    return {...acc, sum: current[0].price + acc.sum, c: current[0].coefficient + acc.c}
                }, {type: 'ownMes', sum: 0, c:0})
            })
        
        
        // 最后的价格计算
        Promise.all([baseMes, chooseMes, ownMes]).then(result => {
           
            console.log('result=>>>',result)
            let A = result[0].sum + result[1].sum;
            let B = result[0].c + result[1].c;
            let C = truePersonNum;
            let ownTotalprices = result[2].sum;

            // 将订单存到数据库中order
            let totalPrices = A + B * C + ownTotalprices + servertype;

            req.models.order.create(
                {   
                    order_no  : NumberTime,
                    created_at: NumberTime,
                    user_id   : NumberId,
                    real_name : '测试时间戳',
                    total     : totalPrices,
                    is_deleted: 0,
                    quantity  : truePersonNum
                },function(err){
                   if(err){ throw err}
             })

            console.log('总价格=>>>',totalPrices)
            res.json({code: 20000,title: '订单提交成功',sum: totalPrices,order_no: NumberTime})
        });
}

// 显示订单详情  打印
exports.OrderPrint = function(req,res,next) {
    var order_no = req.body.data;
    console.log('要打印的订单编号：',order_no)

    var base = null;
    var nobaseName = [];
    req.models.product_info.find({category_id:'0',is_deleted: '0'},function(err,lists){
        base = lists;
        req.models.order_desp.find({order_no:order_no},function(err,lists){
             res.json({ code: 20000,title: 'baseList',base: base,nobase: lists});
        })
    })


    
}


// 删除订单
exports.Delorder = function(req,res,next) {
    var delname = req.body.data;
    console.log('要删除的模块名字：',delname)
    req.models.order.find({ order_no: delname }).each(function(list){

        list.is_deleted = 1

    }).save(function (err) {
        if(err){
            res.json({code: -1})
        }else{
            console.log('删除')
            res.json({code: 20000,title: "删除订单"})
        }
        
    });
}