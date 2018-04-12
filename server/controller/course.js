var formidable = require("formidable");
var fs = require("fs");

// 获取课程列表
exports.CourseList = function(req, res, next) {
  req.models.course.find({ isDel: 0 }, function(err, list) {
    if (err) {
      throw err;
    } else {
      var classIdArr = [];
      var classArr = [];
      list.map((item, index) => {
        classIdArr[index] = item.course_class_id;
      });
      var findPro = params =>
        new Promise((resolve, reject) =>
          req.models.course_class.find(params, function(err, result) {
            err ? reject(err) : resolve(result);
          })
        ); // find的promise操作
      Promise.all(classIdArr.map((item, index) => findPro({ id: item }))).then(
        result => {
          result.map((item, index) => {
            list[index].course_class_name = item[0].course_class_name;
          });
          res.json({ title: "courseList", code: 20000, data: list });
        }
      );
    }
  });
};

// 删除课程
exports.DelCourse = function(req, res, next) {
  var id = req.body.data;

  req.models.course
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

// 修改课程(新增和修改用的同一个接口，通过id判断)
exports.UpdateCourse = function(req, res, next) {
  var id = req.body.id;
  if (!id) {
    req.models.course.create(
      {
        course_name: req.body.name,
        course_price: req.body.price,
        course_desp: req.body.desp,
        course_class_id: req.body.type,
        video_url: req.body.url,
        cover: req.body.avatar,
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
    req.models.course
      .find({ id: id })
      .each(function(list) {
        list.course_name = req.body.name;
        list.course_price = req.body.price;
        list.course_desp = req.body.desp;
        list.course_class_id = req.body.type;
        list.video_url = req.body.url;
        list.cover = req.body.avatar;
      })
      .save(function(err) {
        if (err) {
          res.json({ code: -1 });
        }
        res.json({ code: 20000, title: "修改成功" });
      });
  }
};

// 获取课程类型列表
exports.CourseClass = function(req, res, next) {
  req.models.course_class.find({ isDel: 0 }, function(err, list) {
    if (err) {
      throw err;
    } else {
      var findPro = params =>
        new Promise((resolve, reject) =>
          req.models.course.find(params, function(err, result) {
            err ? reject(err) : resolve(result);
          })
        ); // find的promise操作
      Promise.all(list.map((item, index)=>findPro({course_class_id: item.id, isDel: 0}))).then(
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

// 删除课程类型
exports.DelCourseClass=function(req,res,next){

  var id = req.body.data;
  console.log(id)
  var findPro = params =>
      new Promise((resolve, reject) =>
          req.models.course.find(params).each(function(list){
            list.isDel=1;
          }).save(function(err){
            err ? reject(err) : resolve();
          })
        ); // find的promise操作
  
  findPro({course_class_id:id}).then(()=>{
    req.models.course_class.find({id: id}).each(function(_list){
      _list.isDel=1
    }).save(function(err){
      if(err){
        res.json({ code: -1 });
      }
      res.json({ code: 20000 },);
     })
  })
}

// 修改课程类型(新增和修改用的同一个接口，通过id判断)
exports.UpdateCourseClass = function(req, res, next) {
  var id = req.body.id;
  if (!id) {
    req.models.course_class.create(
      {
        course_class_name: req.body.name,
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
    req.models.course_class
      .find({ id: id })
      .each(function(list) {
        list.course_class_name = req.body.name;
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
exports.UpdateCourseCover = function(req, res, next) {
  var form = new formidable.IncomingForm(); //创建上传表单
  form.encoding = "utf-8"; //设置编辑
  form.uploadDir = "public/course_cover"; //设置上传目录
  form.keepExtensions = true; //保留后缀
  form.maxFieldsSize = 20 * 1024 * 1024; //文件大小 k
  form.parse(req,function(err, fields, files){ 
    if(err) {  
        res.send(err);  
        return;  
    }  
    
    var extraName='.'+files.file.path.split('.')[1]
    var randomName = 'course_cover'+(new Date()).getTime()+ parseInt(Math.random() * 8999 +10000);

    var newName=randomName+extraName
    var newpath =  'public/course_cover/'+newName;
    var oldpath =  files.file.path
    fs.rename(oldpath,newpath,function(err){
      if(err){
            console.error("改名失败"+err);
      }
      var resPath = 'http://localhost:3000/course_cover/'+newName
      res.json({ code: 20000, title: "上传成功",data:{path:resPath} });
    });
    
  });  
};