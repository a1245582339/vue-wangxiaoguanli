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

 Date: 04/11/2018 21:14:49 PM
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
  `password` varchar(15) NOT NULL,
  `create_time` bigint(15) NOT NULL,
  `isDel` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1 COMMENT='产品明细';

-- ----------------------------
--  Records of `admin_user`
-- ----------------------------
BEGIN;
INSERT INTO `admin_user` VALUES ('1', 'admin', '1', '13900000000', 'admin', '1523425489', '0'), ('2', 'editor', '2', '13800000001', 'admin', '1523421448', '0'), ('3', 'lizp', '1', '13555555555', 'admin', '1523420705', '0');
COMMIT;

-- ----------------------------
--  Table structure for `course_class`
-- ----------------------------
DROP TABLE IF EXISTS `course_class`;
CREATE TABLE `course_class` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `course_class_name` varchar(50) CHARACTER SET utf8 NOT NULL,
  `isDel` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

-- ----------------------------
--  Records of `course_class`
-- ----------------------------
BEGIN;
INSERT INTO `course_class` VALUES ('1', '前端课程', '0'), ('2', '算法课程', '0'), ('3', '后台课程', '0'), ('4', '数据库1', '0'), ('5', '开发工具', '0');
COMMIT;

-- ----------------------------
--  Table structure for `courses`
-- ----------------------------
DROP TABLE IF EXISTS `courses`;
CREATE TABLE `courses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `course_name` text CHARACTER SET utf8 NOT NULL,
  `course_price` decimal(20,0) NOT NULL,
  `course_class_id` int(11) NOT NULL,
  `video_url` varchar(225) CHARACTER SET utf8 DEFAULT NULL,
  `course_desp` varchar(225) CHARACTER SET utf8 NOT NULL,
  `isDel` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

-- ----------------------------
--  Records of `courses`
-- ----------------------------
BEGIN;
INSERT INTO `courses` VALUES ('1', 'js', '10313123', '1', 'http://localhost:3000/vedio/js.mp4', 'sadsadsadsadsadsadsadsadsadsadsad', '0'), ('2', 'css', '3', '1', 'http://localhost:3000/vedio/css.mp4', '层叠样式表(英文全称：Cascading Style Sheets)是一种用来表现HTML（标准通用标记语言的一个应用）或XML（标准通用标记语言的一个子集）等文件样式的计算机语言。', '1'), ('3', 'html', '0', '1', 'http://localhost:3000/vedio/html.mp4', '超文本标记语言，标准通用标记语言下的一个应用。\n“超文本”就是指页面内可以包含图片、链接，甚至音乐、程序等非文字元素。', '0'), ('4', '数据结构', '20', '2', 'http://localhost:3000/vedio/数据结构.mp4', '数据结构是计算机存储、组织数据的方式。数据结构是指相互之间存在一种或多种特定关系的数据元素的集合。通常情况下，精心选择的数据结构可以带来更高的运行或者存储效率。数据结构往往同高效的检索算法和索引技术有关。', '0'), ('5', 'JAVA', '10', '3', 'http://localhost:3000/vedio/JAVA.mp4', 'Java是一门面向对象编程语言，不仅吸收了C++语言的各种优点，还摒弃了C++里难以理解的多继承、指针等概念，因此Java语言具有功能强大和简单易用两个特征。Java语言作为静态面向对象编程语言的代表，极好地实现了面向对象理论，允许程序员以优雅的思维方式进行复杂的编程', '0'), ('6', 'eqweqwewqe', '222', '1', 'http://localhost:3000/vedio/js.flv', 'wqeqwewqe2', '0');
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
  `article_url` varchar(225) CHARACTER SET utf8 DEFAULT NULL,
  `page_view` decimal(20,0) NOT NULL,
  `isDel` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- ----------------------------
--  Records of `news`
-- ----------------------------
BEGIN;
INSERT INTO `news` VALUES ('1', '科大讯飞AIUI项目总监丁瑞：打造属于你的AI交互产品', '随着人工智能时代的快速到来，智能交互产品已经越来越多的进入千家万户。AI人机交互的痛点在哪里？如何打造一款属于你的AI交互产品呢？', '1', '/news_article/art101.html', '50', '0');
COMMIT;

-- ----------------------------
--  Table structure for `news_type`
-- ----------------------------
DROP TABLE IF EXISTS `news_type`;
CREATE TABLE `news_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `news_type_name` varchar(50) CHARACTER SET utf8 NOT NULL,
  `isDel` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- ----------------------------
--  Records of `news_type`
-- ----------------------------
BEGIN;
INSERT INTO `news_type` VALUES ('1', '技术新闻', '0');
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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- ----------------------------
--  Records of `order`
-- ----------------------------
BEGIN;
INSERT INTO `order` VALUES ('1', '1', '1', '20', '1523425871', '1'), ('2', '2', '2', '100', '1523425904', '0'), ('3', '2', '3', '100', '1523429999', '0');
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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- ----------------------------
--  Records of `roles`
-- ----------------------------
BEGIN;
INSERT INTO `roles` VALUES ('1', '超级管理员', '0'), ('2', '管理员', '0');
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
  `create_time` bigint(20) NOT NULL,
  `ischecked` int(1) NOT NULL DEFAULT '0' COMMENT '是否被审核',
  `sex` varchar(255) CHARACTER SET utf8 NOT NULL,
  `isDel` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- ----------------------------
--  Records of `student`
-- ----------------------------
BEGIN;
INSERT INTO `student` VALUES ('1', '张三', '13500000000', '100111', '1523352574', '1', '男', '0'), ('2', '李四', '15222222222', '100', '1523352614', '1', '男', '1'), ('3', '王五', '13599999999', '200', '1523352636', '1', '女', '1'), ('4', '赵六', '18966666666', '0', '1523352665', '1', '男', '0');
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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=latin1;

-- ----------------------------
--  Records of `token`
-- ----------------------------
BEGIN;
INSERT INTO `token` VALUES ('5', '1523244889309', '1523244889309', '1'), ('6', '1523244998061', '1523849798061', '1'), ('7', '1523246402985', '1523851202985', '1'), ('8', '1523246432806', '1523851232806', '1'), ('9', '1523246436028', '1523851236028', '1'), ('10', '1523246621393', '1523851421393', '1'), ('11', '1523246970238', '1523851770238', '1'), ('12', '1523247062924', '1523851862924', '1'), ('13', '1523247195003', '1523851995003', '1'), ('14', '1523247442854', '1523852242854', '1'), ('15', '1523247590176', '1523852390176', '1'), ('16', '1523247840599', '1523852640599', '1'), ('17', '1523247971913', '1523852771913', '1'), ('18', '1523248096388', '1523852896388', '1'), ('19', '1523248193901', '1523852993901', '1'), ('20', '1523248237648', '1523853037648', '1'), ('21', '1523248363473', '1523853163473', '1'), ('22', '1523248841545', '1523853641545', '1'), ('23', '1523249289266', '1523854089266', '1'), ('24', '1523249348020', '1523854148020', '1'), ('25', '1523249371670', '1523854171670', '1'), ('26', '1523249880695', '1523854680695', '1'), ('27', '1523250649896', '1523855449896', '1'), ('28', '1523250698406', '1523855498406', '1'), ('29', '1523250751396', '1523855551396', '1'), ('30', '1523250797134', '1523855597134', '1'), ('31', '1523250868484', '1523855668484', '1'), ('32', '1523250945370', '1523855745370', '1'), ('33', '1523251095378', '1523855895378', '1'), ('34', '1523251102065', '1523855902065', '2'), ('35', '1523251123918', '1523855923918', '1'), ('36', '1523251549266', '1523856349266', '1'), ('37', '1523251575401', '1523856375401', '1'), ('38', '1523251608821', '1523856408821', '1'), ('39', '1523251698179', '1523856498179', '1'), ('40', '1523252599611', '1523857399611', '1'), ('41', '1523258672711', '1523863472711', '1'), ('42', '1523260271368', '1523865071368', '1'), ('43', '1523323354385', '1523928154385', '1'), ('44', '1523326956866', '1523931756866', '1'), ('45', '1523331605889', '1523936405889', '1'), ('46', '1523344005236', '1523948805236', '1'), ('47', '1523410106475', '1524014906475', '1'), ('48', '1523411436909', '1524016236909', '1'), ('49', '1523412861325', '1524017661325', '1'), ('50', '1523413850636', '1524018650636', '1'), ('51', '1523414773498', '1524019573498', '2'), ('52', '1523414778379', '1524019578379', '1'), ('53', '1523415622833', '1524020422833', '1'), ('54', '1523418390087', '1524023190087', '1'), ('55', '1523428846611', '1524033646611', '1'), ('56', '1523448250625', '1524053050625', '1');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
