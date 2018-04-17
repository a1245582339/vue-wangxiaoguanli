/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 50721
 Source Host           : localhost
 Source Database       : question_system

 Target Server Type    : MySQL
 Target Server Version : 50721
 File Encoding         : utf-8

 Date: 04/17/2018 21:45:20 PM
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `admin_user`
-- ----------------------------
DROP TABLE IF EXISTS `admin_user`;
CREATE TABLE `admin_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `roles_id` int(20) NOT NULL,
  `tel` varchar(11) NOT NULL,
  `avatar` varchar(1000) CHARACTER SET utf8 NOT NULL,
  `password` varchar(15) NOT NULL,
  `create_time` bigint(15) NOT NULL,
  `isDel` int(11) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1 ROW_FORMAT=DYNAMIC COMMENT='产品明细';

-- ----------------------------
--  Records of `admin_user`
-- ----------------------------
BEGIN;
INSERT INTO `admin_user` VALUES ('1', 'admin', '1', '13900000000', 'http://localhost:3000/admin_avatar/admin_avatar152352057939415677.jpg', 'admin', '1523520579', '0'), ('2', 'editor', '2', '13800000001', 'http://localhost:3000/stu_avatar/默认.jpg', 'admin', '1523421448', '0'), ('3', 'lizp', '1', '13555555555', 'http://localhost:3000/stu_avatar/默认.jpg', 'admin', '1523420705', '0');
COMMIT;

-- ----------------------------
--  Table structure for `course`
-- ----------------------------
DROP TABLE IF EXISTS `course`;
CREATE TABLE `course` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `course_name` text CHARACTER SET utf8 NOT NULL,
  `course_price` int(20) NOT NULL,
  `course_class_id` int(11) NOT NULL,
  `video_url` varchar(225) CHARACTER SET utf8 NOT NULL,
  `isBanner` int(11) NOT NULL,
  `cover` varchar(100) CHARACTER SET utf8 NOT NULL,
  `course_desp` varchar(225) CHARACTER SET utf8 NOT NULL,
  `isDel` int(11) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1 ROW_FORMAT=DYNAMIC;

-- ----------------------------
--  Records of `course`
-- ----------------------------
BEGIN;
INSERT INTO `course` VALUES ('1', 'js', '50', '1', 'http://localhost:3000/vedio/js.mp4', '0', 'http://localhost:3000/course_cover/course_cover152352310268712152.jpeg', 'JavaScript一种直译式脚本语言，是一种动态类型、弱类型、基于原型的语言，内置支持类型。它的解释器被称为JavaScript引擎，为浏览器的一部分，广泛用于客户端的脚本语言，最早是在HTML（标准通用标记语言下的一个应用）网页上使用，用来给HTML网页增加动态功能。11', '0'), ('2', 'css', '10', '1', 'http://localhost:3000/vedio/css.mp4', '1', 'http://localhost:3000/course_cover/course_cover152352239138212722.jpeg', '层叠样式表(英文全称：Cascading Style Sheets)是一种用来表现HTML（标准通用标记语言的一个应用）或XML（标准通用标记语言的一个子集）等文件样式的计算机语言。', '0'), ('3', 'html', '0', '1', 'http://localhost:3000/vedio/html.mp4', '1', 'http://localhost:3000/course_cover/course_cover152352235899618006.jpeg', '超文本标记语言，标准通用标记语言下的一个应用。\n“超文本”就是指页面内可以包含图片、链接，甚至音乐、程序等非文字元素。', '0'), ('4', '数据结构', '24', '2', 'http://localhost:3000/vedio/数据结构.mp4', '0', 'http://localhost:3000/course_cover/course_cover152352236540513063.jpeg', '数据结构是计算机存储、组织数据的方式。数据结构是指相互之间存在一种或多种特定关系的数据元素的集合。通常情况下，精心选择的数据结构可以带来更高的运行或者存储效率。数据结构往往同高效的检索算法和索引技术有关。', '0'), ('5', 'JAVA', '10', '3', 'http://localhost:3000/vedio/JAVA.mp4', '0', 'http://localhost:3000/course_cover/course_cover152352214380215349.jpg', 'Java是一门面向对象编程语言，不仅吸收了C++语言的各种优点，还摒弃了C++里难以理解的多继承、指针等概念，因此Java语言具有功能强大和简单易用两个特征。Java语言作为静态面向对象编程语言的代表，极好地实现了面向对象理论，允许程序员以优雅的思维方式进行复杂的编程', '0'), ('6', 'wqe', '9999', '3', 'http://localhost:3000/vedio/js.mp4', '0', 'http://localhost:3000/course_cover/course_cover152392861158111747.png', 'ewq', '0');
COMMIT;

-- ----------------------------
--  Table structure for `course_class`
-- ----------------------------
DROP TABLE IF EXISTS `course_class`;
CREATE TABLE `course_class` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `course_class_name` varchar(50) CHARACTER SET utf8 NOT NULL,
  `isDel` int(11) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1 ROW_FORMAT=DYNAMIC;

-- ----------------------------
--  Records of `course_class`
-- ----------------------------
BEGIN;
INSERT INTO `course_class` VALUES ('1', '前端课程', '0'), ('2', '算法课程', '0'), ('3', '后台课程', '0'), ('4', '数据库1', '0'), ('5', '开发工具', '0');
COMMIT;

-- ----------------------------
--  Table structure for `course_favorite`
-- ----------------------------
DROP TABLE IF EXISTS `course_favorite`;
CREATE TABLE `course_favorite` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `course_id` int(11) NOT NULL,
  `stu_id` int(11) NOT NULL,
  `create_time` bigint(20) NOT NULL,
  `isDel` int(11) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1 ROW_FORMAT=DYNAMIC;

-- ----------------------------
--  Records of `course_favorite`
-- ----------------------------
BEGIN;
INSERT INTO `course_favorite` VALUES ('1', '1', '2', '1523524612', '1'), ('2', '1', '2', '1523529999', '1'), ('3', '6', '2', '1523533333', '0'), ('4', '6', '1', '1523599999', '0'), ('5', '2', '2', '1523954061', '0'), ('6', '3', '2', '1523954371', '0'), ('7', '1', '2', '1523954396', '1');
COMMIT;

-- ----------------------------
--  Table structure for `news`
-- ----------------------------
DROP TABLE IF EXISTS `news`;
CREATE TABLE `news` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `news_name` text CHARACTER SET utf8 NOT NULL,
  `news_desp` varchar(225) CHARACTER SET utf8 NOT NULL,
  `news_type_id` int(11) NOT NULL,
  `page_view` int(20) NOT NULL DEFAULT '0',
  `create_time` bigint(15) NOT NULL,
  `cover` varchar(2000) CHARACTER SET utf8 NOT NULL,
  `isDel` int(11) NOT NULL,
  `content` text CHARACTER SET utf8,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1 ROW_FORMAT=DYNAMIC;

-- ----------------------------
--  Records of `news`
-- ----------------------------
BEGIN;
INSERT INTO `news` VALUES ('1', '科大讯飞AIUI项目总监丁瑞：打造属于你的AI交互产品', '随着人工智能时代的快速到来，智能交互产品已经越来越多的进入千家万户。AI人机交互的痛点在哪里？如何打造一款属于你的AI交互产品呢？', '1', '50', '1523380273', 'http://localhost:3000/news_cover/news_cover152352402362410631.jpg', '0', '<h1 style=\"text-align: center;\">Welcome to the TinyMCE demo!</h1><p style=\"text-align: center; font-size: 15px;\"><img title=\"TinyMCE Logo\" src=\"//www.tinymce.com/images/glyph-tinymce@2x.png\" alt=\"TinyMCE Logo\" width=\"110\" height=\"97\" /><ul>\n        <li>Our <a href=\"//www.tinymce.com/docs/\">documentation</a> is a great resource for learning how to configure TinyMCE.</li><li>Have a specific question? Visit the <a href=\"https://community.tinymce.com/forum/\">Community Forum</a>.</li><li>We also offer enterprise grade support as part of <a href=\"https://tinymce.com/pricing\">TinyMCE premium subscriptions</a>.</li>\n      </ul>'), ('2', '测试测试', '这个是测试用的', '1', '0', '1523480273', 'http://localhost:3000/news_cover/news_cover152352405649318122.jpeg', '0', '<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<h1 align=\"center\"><b>测</b><i>试</i><u>富</u><strike>文</strike><font color=\"#993300\">本</font><font style=\"background-color: #ffff99;\">编</font><sub>辑</sub><sup>器</sup></h1>\n</body>\n</html>'), ('3', 'nodejs超牛逼', 'nodejs超牛逼', '1', '0', '1523680273', 'http://localhost:3000/news_cover/news_cover152352845244715554.jpeg', '0', '<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<h1 align=\"center\">nodejs超牛逼</h1>\n</body>\n</html>'), ('4', 'qwe', 'ewq', '1', '0', '1523928784', 'http://localhost:3000/news_cover/news_cover152392878444715864.png', '0', '<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p>qwe</p>\n</body>\n</html>');
COMMIT;

-- ----------------------------
--  Table structure for `news_favorite`
-- ----------------------------
DROP TABLE IF EXISTS `news_favorite`;
CREATE TABLE `news_favorite` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `news_id` int(11) NOT NULL,
  `stu_id` int(11) NOT NULL,
  `create_time` bigint(20) NOT NULL,
  `isDel` int(11) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1 ROW_FORMAT=DYNAMIC;

-- ----------------------------
--  Records of `news_favorite`
-- ----------------------------
BEGIN;
INSERT INTO `news_favorite` VALUES ('1', '1', '3', '1523524612', '0'), ('2', '2', '2', '1523529999', '0'), ('3', '4', '2', '1523956370', '1'), ('4', '4', '2', '1523956385', '1'), ('5', '4', '2', '1523956422', '1'), ('6', '4', '2', '1523956424', '1'), ('7', '4', '2', '1523956425', '1'), ('8', '4', '2', '1523957659', '0'), ('9', '3', '2', '1523957664', '0');
COMMIT;

-- ----------------------------
--  Table structure for `news_type`
-- ----------------------------
DROP TABLE IF EXISTS `news_type`;
CREATE TABLE `news_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `news_type_name` varchar(50) CHARACTER SET utf8 NOT NULL,
  `isDel` int(11) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1 ROW_FORMAT=DYNAMIC;

-- ----------------------------
--  Records of `news_type`
-- ----------------------------
BEGIN;
INSERT INTO `news_type` VALUES ('1', '技术新闻', '0'), ('2', '商业新闻', '0');
COMMIT;

-- ----------------------------
--  Table structure for `news_visit_log`
-- ----------------------------
DROP TABLE IF EXISTS `news_visit_log`;
CREATE TABLE `news_visit_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `news_id` int(11) NOT NULL COMMENT '资讯id',
  `stu_id` int(11) NOT NULL COMMENT '学生id',
  `create_time` bigint(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=latin1;

-- ----------------------------
--  Records of `news_visit_log`
-- ----------------------------
BEGIN;
INSERT INTO `news_visit_log` VALUES ('1', '1', '-1', '1523854101'), ('2', '1', '-1', '1523854125'), ('3', '1', '5', '1523854058'), ('4', '2', '1', '1523858404'), ('5', '3', '5', '1523721600'), ('6', '3', '2', '1523635200'), ('7', '4', '1', '1523931327'), ('8', '3', '1', '1523931329'), ('9', '2', '1', '1523931332'), ('10', '2', '1', '1523931334'), ('11', '3', '1', '1523931335'), ('12', '4', '1', '1523931344'), ('13', '4', '1', '1523931345'), ('14', '4', '1', '1523931346'), ('15', '4', '1', '1523931348'), ('16', '4', '1', '1523931350'), ('17', '4', '1', '1523931351'), ('18', '3', '1', '1523931526'), ('19', '3', '1', '1523931934'), ('20', '4', '2', '1523955483'), ('21', '4', '2', '1523955532'), ('22', '4', '2', '1523955568'), ('23', '4', '2', '1523955626'), ('24', '4', '2', '1523955659'), ('25', '4', '2', '1523955691'), ('26', '4', '2', '1523955786'), ('27', '4', '2', '1523955919'), ('28', '4', '2', '1523956030'), ('29', '4', '2', '1523956091'), ('30', '4', '2', '1523956095'), ('31', '4', '2', '1523956368'), ('32', '4', '2', '1523956373'), ('33', '4', '2', '1523956382'), ('34', '4', '2', '1523956407'), ('35', '4', '2', '1523956421'), ('36', '4', '2', '1523957658'), ('37', '3', '2', '1523957662'), ('38', '2', '2', '1523957975');
COMMIT;

-- ----------------------------
--  Table structure for `order`
-- ----------------------------
DROP TABLE IF EXISTS `order`;
CREATE TABLE `order` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `course_id` int(11) NOT NULL,
  `stu_id` int(11) NOT NULL,
  `spend` int(11) DEFAULT NULL,
  `create_time` bigint(20) NOT NULL,
  `isDel` int(11) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=latin1 ROW_FORMAT=DYNAMIC;

-- ----------------------------
--  Records of `order`
-- ----------------------------
BEGIN;
INSERT INTO `order` VALUES ('2', '2', '2', '100', '1523425904', '0'), ('3', '2', '3', '100', '1523429999', '0'), ('12', '1', '5', '50', '1523848059', '0'), ('13', '5', '5', '10', '1523848544', '0'), ('14', '4', '5', '24', '1523848566', '0'), ('20', '5', '1', '10', '1523857758', '1'), ('21', '4', '1', '24', '1523857972', '1'), ('22', '2', '1', '10', '1523858131', '0'), ('23', '3', '1', '0', '1523858364', '1'), ('24', '1', '1', '50', '1523858380', '0'), ('25', '6', '1', '123', '1523930396', '1'), ('26', '6', '5', '9999', '1523936804', '0');
COMMIT;

-- ----------------------------
--  Table structure for `order_desp`
-- ----------------------------
DROP TABLE IF EXISTS `order_desp`;
CREATE TABLE `order_desp` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `order_no` varchar(50) CHARACTER SET utf8 NOT NULL,
  `created_at` int(11) NOT NULL DEFAULT '0' COMMENT '创建时间',
  `is_deleted` smallint(6) NOT NULL DEFAULT '0' COMMENT '1-已删除;2-未删除',
  `order_id` int(11) NOT NULL DEFAULT '0',
  `price` float(9,2) NOT NULL DEFAULT '0.00',
  `product_id` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
--  Table structure for `product_category`
-- ----------------------------
DROP TABLE IF EXISTS `product_category`;
CREATE TABLE `product_category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) CHARACTER SET utf8 NOT NULL,
  `created_at` int(11) NOT NULL DEFAULT '0' COMMENT '创建时间',
  `is_deleted` smallint(6) NOT NULL DEFAULT '0' COMMENT '1-已删除;2-未删除',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='产品分类:0-第一部分：平台基础模块;1-第二部分：可选组件模块;2-第三部分：授权;3-第四部分：可选服务报价;4-敏';

-- ----------------------------
--  Table structure for `product_info`
-- ----------------------------
DROP TABLE IF EXISTS `product_info`;
CREATE TABLE `product_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `desp` text NOT NULL,
  `category_id` int(11) NOT NULL DEFAULT '0',
  `created_at` int(11) NOT NULL DEFAULT '0',
  `updated_at` int(11) NOT NULL DEFAULT '0',
  `deleted_at` int(11) NOT NULL DEFAULT '0',
  `is_deleted` smallint(6) NOT NULL DEFAULT '0' COMMENT '1-已删除;2-未删除',
  `display_order` int(11) NOT NULL DEFAULT '0',
  `price` float(9,2) NOT NULL DEFAULT '0.00',
  `coefficient` float NOT NULL DEFAULT '0',
  `type` int(11) NOT NULL DEFAULT '0' COMMENT '0-基础;1-必选其一;2-可选',
  `mobile` varchar(250) CHARACTER SET utf8 DEFAULT '-',
  `pad` varchar(250) CHARACTER SET utf8 DEFAULT '-',
  `web` varchar(250) CHARACTER SET utf8 DEFAULT '-',
  `pc` varchar(250) CHARACTER SET utf8 DEFAULT '-',
  `standalone` varchar(250) CHARACTER SET utf8 DEFAULT '-',
  `highly_available` varchar(250) CHARACTER SET utf8 DEFAULT '-',
  `highly_cluster` varchar(250) CHARACTER SET utf8 DEFAULT '-',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1 COMMENT='产品明细';

-- ----------------------------
--  Records of `product_info`
-- ----------------------------
BEGIN;
INSERT INTO `product_info` VALUES ('1', '111', '111', '2', '0', '0', '0', '1', '0', '111.00', '111', '0', '-', '-', '-', '-', '-', '-', '-');
COMMIT;

-- ----------------------------
--  Table structure for `roles`
-- ----------------------------
DROP TABLE IF EXISTS `roles`;
CREATE TABLE `roles` (
  `id` int(3) NOT NULL AUTO_INCREMENT,
  `roles` text CHARACTER SET utf8 NOT NULL,
  `isDel` int(11) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1 ROW_FORMAT=DYNAMIC;

-- ----------------------------
--  Records of `roles`
-- ----------------------------
BEGIN;
INSERT INTO `roles` VALUES ('1', '超级管理员', '0'), ('2', '管理员', '0');
COMMIT;

-- ----------------------------
--  Table structure for `stu_token`
-- ----------------------------
DROP TABLE IF EXISTS `stu_token`;
CREATE TABLE `stu_token` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `token` varchar(255) NOT NULL,
  `deadline` bigint(255) NOT NULL,
  `stu_id` int(11) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=141 DEFAULT CHARSET=latin1 ROW_FORMAT=DYNAMIC;

-- ----------------------------
--  Records of `stu_token`
-- ----------------------------
BEGIN;
INSERT INTO `stu_token` VALUES ('65', '1523705737435', '1524310537435', '5'), ('66', '1523705894239', '1524310694239', '5'), ('67', '1523706405458', '1524311205458', '5'), ('68', '1523706425049', '1524311225049', '5'), ('69', '1523707311096', '1524312111096', '5'), ('70', '1523707359895', '1524312159895', '5'), ('71', '1523707445083', '1524312245083', '5'), ('72', '1523707537772', '1524312337772', '5'), ('73', '1523707563445', '1524312363445', '5'), ('74', '1523707693731', '1524312493731', '5'), ('75', '1523707786114', '1524312586114', '5'), ('76', '1523707838552', '1524312638552', '5'), ('77', '1523707893215', '1524312693215', '5'), ('78', '1523708328981', '1524313128981', '5'), ('79', '1523708371741', '1524313171741', '5'), ('80', '1523708381446', '1524313181446', '5'), ('81', '1523708481547', '1524313281547', '5'), ('82', '1523708508636', '1524313308636', '5'), ('83', '1523708564472', '1524313364472', '5'), ('84', '1523708642123', '1524313442123', '5'), ('85', '1523708786907', '1524313586907', '5'), ('86', '1523708879211', '1524313679211', '5'), ('87', '1523708935163', '1524313735163', '5'), ('88', '1523708957027', '1524313757027', '5'), ('89', '1523708990958', '1524313790958', '5'), ('90', '1523709166644', '1524313966644', '5'), ('91', '1523709785383', '1524314585383', '7'), ('92', '1523709806503', '1524314606503', '7'), ('93', '1523709821636', '1524314621636', '5'), ('94', '1523709868518', '1524314668518', '5'), ('95', '1523709930079', '1524314730079', '5'), ('96', '1523709944301', '1524314744301', '5'), ('97', '1523710047490', '1524314847490', '5'), ('98', '1523710096251', '1524314896251', '5'), ('99', '1523711407595', '1524316207595', '7'), ('100', '1523711426675', '1524316226675', '7'), ('101', '1523712662690', '1524317462690', '7'), ('102', '1523712818244', '1524317618244', '7'), ('103', '1523713381195', '1524318181195', '5'), ('104', '1523713528600', '1524318328600', '5'), ('105', '1523713822488', '1524318622488', '5'), ('106', '1523713858425', '1524318658425', '5'), ('107', '1523714231190', '1524319031190', '5'), ('108', '1523714258520', '1524319058520', '5'), ('109', '1523714288536', '1524319088536', '5'), ('110', '1523714506037', '1524319306037', '5'), ('111', '1523714598994', '1524319398994', '5'), ('112', '1523714651955', '1524319451955', '5'), ('113', '1523714742343', '1524319542343', '5'), ('114', '1523715156339', '1524319956339', '5'), ('115', '1523719275847', '1524324075847', '6'), ('116', '1523719443387', '1524324243387', '5'), ('117', '1523720040309', '1524324840309', '5'), ('118', '1523720051384', '1524324851384', '5'), ('119', '1523751229343', '1524356029343', '5'), ('120', '1523751260574', '1524356060574', '5'), ('121', '1523751307050', '1524356107050', '5'), ('122', '1523751393117', '1524356193117', '5'), ('123', '1523751443418', '1524356243418', '5'), ('124', '1523751752439', '1524356552439', '5'), ('125', '1523756642697', '1524361442697', '1'), ('126', '1523760517351', '1524365317351', '2'), ('127', '1523760907947', '1524365707947', '5'), ('128', '1523792918542', '1524397718542', '6'), ('129', '1523792998843', '1524397798843', '2'), ('130', '1523796038869', '1524400838869', '5'), ('131', '1523842954356', '1524447754356', '5'), ('132', '1523849132976', '1524453932976', '6'), ('133', '1523851812488', '1524456612488', '5'), ('134', '1523857219108', '1524462019108', '1'), ('135', '1523930940338', '1524535740338', '1'), ('136', '1523934960706', '1524539760706', '5'), ('137', '1523935454188', '1524540254188', '5'), ('138', '1523935981705', '1524540781705', '5'), ('139', '1523944553052', '1524549353052', '1'), ('140', '1523945422050', '1524550222050', '2');
COMMIT;

-- ----------------------------
--  Table structure for `student`
-- ----------------------------
DROP TABLE IF EXISTS `student`;
CREATE TABLE `student` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `stu_name` varchar(50) CHARACTER SET utf8 NOT NULL,
  `tel` varchar(13) NOT NULL,
  `balance` int(20) NOT NULL COMMENT '余额',
  `avatar` varchar(1000) CHARACTER SET utf8 DEFAULT NULL,
  `create_time` bigint(20) NOT NULL,
  `ischecked` int(1) NOT NULL DEFAULT '0' COMMENT '是否被审核',
  `sex` varchar(255) CHARACTER SET utf8 NOT NULL,
  `password` varchar(15) NOT NULL,
  `isDel` int(11) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1 ROW_FORMAT=DYNAMIC;

-- ----------------------------
--  Records of `student`
-- ----------------------------
BEGIN;
INSERT INTO `student` VALUES ('1', '张3333', '13500000000', '97852', 'http://localhost:3000/stu_avatar/1.jpg', '1523352574', '1', '男', 'aaaaaa', '0'), ('2', '李4444', '13555555555', '100', 'http://localhost:3000/stu_avatar/2.jpg', '1523352614', '1', '男', 'aaaaaa', '0'), ('3', '王5555', '13599999999', '200', 'http://localhost:3000/stu_avatar/stu_avatar152351937983813001.png', '1523352636', '1', '女', 'aaaaaa', '0'), ('4', '赵6666', '18966666666', '0', 'http://localhost:3000/stu_avatar/默认.jpg', '1523352665', '1', '男', 'aaaaaa', '0'), ('5', 'test1', '13512877130', '988758', 'http://localhost:3000/stu_avatar/stu_avatar152379251915915917.png', '1523699878', '1', '男', 'qqqqqq', '0'), ('6', 'test2', '13512877130', '10', 'http://localhost:3000/stu_avatar/stu_avatar152379297088716402.gif', '1523700065', '0', '男', 'aaa111', '0'), ('7', 'aaaaa', '13555548774', '0', 'a', '1523700099', '0', '男', 'aaaaaa', '0');
COMMIT;

-- ----------------------------
--  Table structure for `token`
-- ----------------------------
DROP TABLE IF EXISTS `token`;
CREATE TABLE `token` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `token` varchar(255) NOT NULL,
  `deadline` bigint(255) NOT NULL,
  `admin_id` int(11) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=70 DEFAULT CHARSET=latin1 ROW_FORMAT=DYNAMIC;

-- ----------------------------
--  Records of `token`
-- ----------------------------
BEGIN;
INSERT INTO `token` VALUES ('5', '1523244889309', '1523244889309', '1'), ('6', '1523244998061', '1523849798061', '1'), ('7', '1523246402985', '1523851202985', '1'), ('8', '1523246432806', '1523851232806', '1'), ('9', '1523246436028', '1523851236028', '1'), ('10', '1523246621393', '1523851421393', '1'), ('11', '1523246970238', '1523851770238', '1'), ('12', '1523247062924', '1523851862924', '1'), ('13', '1523247195003', '1523851995003', '1'), ('14', '1523247442854', '1523852242854', '1'), ('15', '1523247590176', '1523852390176', '1'), ('16', '1523247840599', '1523852640599', '1'), ('17', '1523247971913', '1523852771913', '1'), ('18', '1523248096388', '1523852896388', '1'), ('19', '1523248193901', '1523852993901', '1'), ('20', '1523248237648', '1523853037648', '1'), ('21', '1523248363473', '1523853163473', '1'), ('22', '1523248841545', '1523853641545', '1'), ('23', '1523249289266', '1523854089266', '1'), ('24', '1523249348020', '1523854148020', '1'), ('25', '1523249371670', '1523854171670', '1'), ('26', '1523249880695', '1523854680695', '1'), ('27', '1523250649896', '1523855449896', '1'), ('28', '1523250698406', '1523855498406', '1'), ('29', '1523250751396', '1523855551396', '1'), ('30', '1523250797134', '1523855597134', '1'), ('31', '1523250868484', '1523855668484', '1'), ('32', '1523250945370', '1523855745370', '1'), ('33', '1523251095378', '1523855895378', '1'), ('34', '1523251102065', '1523855902065', '2'), ('35', '1523251123918', '1523855923918', '1'), ('36', '1523251549266', '1523856349266', '1'), ('37', '1523251575401', '1523856375401', '1'), ('38', '1523251608821', '1523856408821', '1'), ('39', '1523251698179', '1523856498179', '1'), ('40', '1523252599611', '1523857399611', '1'), ('41', '1523258672711', '1523863472711', '1'), ('42', '1523260271368', '1523865071368', '1'), ('43', '1523323354385', '1523928154385', '1'), ('44', '1523326956866', '1523931756866', '1'), ('45', '1523331605889', '1523936405889', '1'), ('46', '1523344005236', '1523948805236', '1'), ('47', '1523410106475', '1524014906475', '1'), ('48', '1523411436909', '1524016236909', '1'), ('49', '1523412861325', '1524017661325', '1'), ('50', '1523413850636', '1524018650636', '1'), ('51', '1523414773498', '1524019573498', '2'), ('52', '1523414778379', '1524019578379', '1'), ('53', '1523415622833', '1524020422833', '1'), ('54', '1523418390087', '1524023190087', '1'), ('55', '1523428846611', '1524033646611', '1'), ('56', '1523448250625', '1524053050625', '1'), ('57', '1523495561140', '1524100361140', '1'), ('58', '1523498993741', '1524103793741', '1'), ('59', '1523499167109', '1524103967109', '1'), ('60', '1523499321119', '1524104121119', '1'), ('61', '1523518411269', '1524123211269', '1'), ('62', '1523523926144', '1524128726144', '1'), ('63', '1523525419644', '1524130219644', '1'), ('64', '1523633807352', '1524238607352', '1'), ('65', '1523858542955', '1524463342955', '1'), ('66', '1523875221497', '1524480021497', '1'), ('67', '1523927631793', '1524532431793', '1'), ('68', '1523961182521', '1524565982521', '1'), ('69', '1523962107820', '1524566907820', '1');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
