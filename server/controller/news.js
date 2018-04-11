var fs = require("fs");

// 获取资讯列表
exports.GetNewsList = function(req, res, next) {
  req.models.news.find({ isDel: 0 }, function(err, list) {
    if (err) {
      throw err;
    } else {
      var classIdArr = [];
      var classArr = [];
      list.map((item, index) => {
        classIdArr[index] = item.news_type_id;
      });
      var findPro = params =>
        new Promise((resolve, reject) =>
          req.models.news_type.find(params, function(err, result) {
            err ? reject(err) : resolve(result);
          })
        ); // find的promise操作
      Promise.all(classIdArr.map((item, index) => findPro({ id: item }))).then(
        result => {
          result.map((item, index) => {
            list[index].news_type_name = item[0].news_type_name;
          });
          res.json({ title: "newsList", code: 20000, data: list });
        }
      );
    }
  });
};

// 获取文章html
exports.GetHTML = function(req, res, next) {
  var url=(req.query[0])
  console.log(url)
//   fs.readFile(url, function (err, data) {
//     if (err) {
//         return console.error('异步读取',err);
//     }
//     console.log("异步读取: " + data.toString());
//  });

};

// 删除资讯
exports.DelNews = function(req, res, next) {
  var id = req.body.data;

  req.models.news
    .find({ id: id })
    .each(function(list) {
      list.isDel = 1;
    })
    .save(function(err) {
      if (err) {
        res.json({ code: -1 });
      } else {
        res.json({ code: 20000, title: "删除成功" });
      }
    });
};

// 修改资讯(新增和修改用的同一个接口，通过id判断)
exports.UpdateNews = function(req, res, next) {
  var id = req.body.id;
  if (!id) {
    req.models.news.create(
      {
        course_name: req.body.name,
        course_price: req.body.price,
        course_desp: req.body.desp,
        news_type_id: req.body.type,
        video_url: req.body.coefficient,
        isDel: 0
      },
      function(err) {
        if (err) {
          throw err;
        }
        res.json({ code: 20000, title: "添加成功" });
      }
    );
  } else {
    req.models.news
      .find({ id: id })
      .each(function(list) {
        list.course_name = req.body.name;
        list.course_price = req.body.price;
        list.course_desp = req.body.desp;
        list.news_type_id = req.body.type;
        list.video_url = req.body.coefficient;
      })
      .save(function(err) {
        if (err) {
          res.json({ code: -1 });
        }
        res.json({ code: 20000 });
      });
  }
};

// 获取资讯类型列表
exports.GetNewsType = function(req, res, next) {
  req.models.news_type.find({ isDel: 0 }, function(err, list) {
    if (err) {
      throw err;
    } else {
      var findPro = params =>
        new Promise((resolve, reject) =>
          req.models.news.find(params, function(err, result) {
            err ? reject(err) : resolve(result);
          })
        ); // find的promise操作
      Promise.all(list.map((item, index)=>findPro({news_type_id: item.id, isDel: 0}))).then(
        result=>{
          result.map((item,index)=>{
            list[index].count=item.length
          });
          res.json({ code: 20000, title: "课程类型", data: list });
        }
      )

      
    }
  });
};

// 删除资讯类型
exports.DelNewsType=function(req,res,next){

  var id = req.body.data;
  console.log(id)
  var findPro = params =>
      new Promise((resolve, reject) =>
          req.models.news.find(params).each(function(list){
            list.isDel=1;
          }).save(function(err){
            err ? reject(err) : resolve();
          })
        ); // find的promise操作
  
  findPro({news_type_id:id}).then(()=>{
    req.models.news_type.find({id: id}).each(function(_list){
      _list.isDel=1
    }).save(function(err){
      if(err){
        res.json({ code: -1 });
      }
      res.json({ code: 20000 },);
     })
  })
}

// 修改资讯类型(新增和修改用的同一个接口，通过id判断)
exports.UpdateNewsType = function(req, res, next) {
  var id = req.body.id;
  if (!id) {
    req.models.news_type.create(
      {
        news_type_name: req.body.name,
        isDel: 0
      },
      function(err) {
        if (err) {
          throw err;
        }
        res.json({ code: 20000, title: "添加成功" });
      }
    );
  } else {
    req.models.news_type
      .find({ id: id })
      .each(function(list) {
        list.news_type_name = req.body.name;
      })
      .save(function(err) {
        if (err) {
          res.json({ code: -1 });
        }
        res.json({ code: 20000 });
      });
  }
};