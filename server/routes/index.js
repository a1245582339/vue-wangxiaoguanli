var express = require('express');

var orm = require('orm')
var router = express.Router();

var User = require('../controller/admin_user')
var Getdata = require('../controller/getdata')
var Choosedata = require('../controller/changedata')
var Order = require('../controller/order')
var Courses = require('../controller/course')
// **********************************用户方面**************************************

router.post('/user/login',User.Login);
router.post('/user/logout', User.Logout);
router.get('/user/info', User.Userinfo);



// **********************************获取模块数据****************************************


// 获取全部模块列表
router.get('/alldata', Getdata.Alldata);
// 获取基本列表
router.get('/basedata', Getdata.Basedata);
// 获取可选列表
router.get('/choosedata', Getdata.Choosedata);
// 获取课程类型列表
router.get('/courseClassList', Courses.CourseClass);
// 获取课程列表
router.get('/courseList', Courses.CourseList);
// 删除课程
router.post('/delCourse', Courses.DelCourse);


// ********************************订单相关**********************************************
// 获取订单
router.get('/order',Order.Getorder)
// 添加订单
router.post('/addorder',Order.Addorder)
// 删除订单
router.post('/delorder', Order.Delorder);
//获取订单详情
router.post('/orderPrint',Order.OrderPrint)
// ****************************更改模块接口***************************


// 添加模块
router.post('/add', Choosedata.Add);
// 更改模块
router.post('/update', Choosedata.Update);
// 更改模块
router.post('/del', Choosedata.Del);




// 添加模块项*****************************

module.exports = router;


