var formidable = require("formidable");
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

// 获取首页资讯列表
exports.GetIndexNews = function(req, res, next) {
  req.models.news.find({ isDel: 0 }, function(err, list) {
    if (err) {
      throw err;
    } else {
      var length=list.length
      var data=[list[length-1],list[length-2],list[length-3]]
      res.json({ title: "newsList", code: 20000, data: data });
    }
  });
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
  console.log(JSON.stringify(req.body))
  if (!id) {
    req.models.news.create(
      {
        news_name: req.body.name,
        news_type_id: req.body.type,
        news_desp: req.body.desp,
        content: req.body.content,
        cover: req.body.avatar,
        page_view:0,
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
        list.news_name = req.body.name;
        list.news_type_id = req.body.type;
        list.news_desp = req.body.desp;
        list.content = req.body.content;
        list.cover = req.body.avatar;
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

// 上传封面
exports.UpdateNewsCover = function(req, res, next) {
  var form = new formidable.IncomingForm(); //创建上传表单
  form.encoding = "utf-8"; //设置编辑
  form.uploadDir = "public/news_cover"; //设置上传目录
  form.keepExtensions = true; //保留后缀
  form.maxFieldsSize = 20 * 1024 * 1024; //文件大小 k
  form.parse(req,function(err, fields, files){ 
    if(err) {  
        res.send(err);  
        return;  
    }  
    
    var extraName='.'+files.file.path.split('.')[1]
    var randomName = 'news_cover'+(new Date()).getTime()+ parseInt(Math.random() * 8999 +10000);

    var newName=randomName+extraName
    var newpath =  'public/news_cover/'+newName;
    var oldpath =  files.file.path
    fs.rename(oldpath,newpath,function(err){
      if(err){
            console.error("改名失败"+err);
      }
      var resPath = 'http://localhost:3000/news_cover/'+newName
      res.json({ code: 20000, title: "上传成功",data:{path:resPath} });
    });
    
  });  
};