var express = require('express');

var orm = require('orm')
var router = express.Router();

var User = require('../controller/admin_user')
var Order = require('../controller/order')
var Course = require('../controller/course')
var Student = require('../controller/student')
var Admin = require('../controller/change_admin')
var News = require('../controller/news')
var Favorites = require('../controller/favorite')
var Banner = require('../controller/banner')
// **********************************用户方面**************************************

router.post('/user/login',User.Login);
router.post('/user/logout', User.Logout);
router.get('/user/info', User.Userinfo);



// **********************************课程相关****************************************

// 获取课程类型列表
router.get('/courseClassList', Course.CourseClass);
// 获取首页课程列表
router.get('/getIndexCourse', Course.GetIndexCourse);
// 获取课程列表
router.get('/courseList', Course.CourseList);
// 根据课程类型获取课程
router.get('/getCourseByclass', Course.GetCourseByclass);
// 删除课程类型
router.post('/delCourseClass', Course.DelCourseClass);
// 删除课程
router.post('/delCourse', Course.DelCourse);
// 修改／新增课程
router.post('/updateCourse', Course.UpdateCourse);
// 修改／新增课程类型
router.post('/updateCourseClass', Course.UpdateCourseClass);
// 上传课程封面
router.post('/updateCourseCover', Course.UpdateCourseCover);

// **********************************资讯相关****************************************

// 获取资讯类型列表
router.get('/getNewsType', News.GetNewsType);
// 获取资讯列表
router.get('/getNewsList', News.GetNewsList);
// 获取首页资讯列表
router.get('/getIndexNews', News.GetIndexNews);
// 删除资讯类型
router.post('/delNewsType', News.DelNewsType);
// 删除资讯
router.post('/delNews', News.DelNews);
// 修改／新增资讯
router.post('/updateNews', News.UpdateNews);
// 修改／新增资讯类型
router.post('/updateNewsType', News.UpdateNewsType);
// 上传资讯封面
router.post('/updateNewsCover', News.UpdateNewsCover);

// **********************************首页轮播相关****************************************

// 获取轮播列表
router.get('/getBanner', Banner.GetBanner);
// 修改轮播
router.post('/UpdataBanner', Banner.UpdataBanner);


// ********************************订单相关**********************************************
// 获取订单
router.get('/orderList',Order.Getorder)
// 添加订单
router.post('/addorder',Order.Addorder)
// 删除订单
router.post('/delOrder', Order.DelOrder);
//获取订单详情
router.post('/orderPrint',Order.OrderPrint)


// ****************************更改学生接口***************************


// 获取学生列表
router.get('/studentList', Student.StudentList);
// 审核学生
router.post('/checkStudent', Student.CheckStudent);
// 删除学生
router.post('/delStudent', Student.DelStudent);
// 更改学生
router.post('/updateStudent', Student.UpdateStudent);
// 上传头像
router.post('/updateStuAvatar', Student.UpdateStuAvatar);
// ****************************更改学生接口***************************


// 获取管理员列表
router.get('/adminList', Admin.AdminList);
// 删除管理员
router.post('/delAdmin', Admin.DelAdmin);
// 更改管理员
router.post('/updateAdmin', Admin.UpdateAdmin);
// 获取管理员类型
router.get('/adminRoles', Admin.AdminRoles);
// 获取当前管理员
router.get('/personalAdmin', Admin.PersonalAdmin);
// 上传头像
router.post('/updateAdminAvatar', Admin.UpdateAdminAvatar);

// ****************************收藏夹接口***************************


// 获取课程收藏夹列表
router.get('/courseFavorite', Favorites.CourseFavorite);
// 获取资讯收藏夹列表
router.get('/newsFavorite', Favorites.NewsFavorite);


// 添加模块项*****************************

module.exports = router;


