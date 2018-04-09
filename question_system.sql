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

 Date: 04/09/2018 13:41:57 PM
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
  `sex` text CHARACTER SET utf8 NOT NULL,
  `password` varchar(15) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1 COMMENT='产品明细';

-- ----------------------------
--  Records of `admin_user`
-- ----------------------------
BEGIN;
INSERT INTO `admin_user` VALUES ('1', 'admin', '1', '13900000000', '男', 'admin'), ('2', 'editor', '2', '13800000000', '女', 'admin');
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
INSERT INTO `product_info` VALUES ('1', '111', '111', '2', '0', '0', '0', '0', '0', '111.00', '111', '0', '-', '-', '-', '-', '-', '-', '-');
COMMIT;

-- ----------------------------
--  Table structure for `roles`
-- ----------------------------
DROP TABLE IF EXISTS `roles`;
CREATE TABLE `roles` (
  `id` int(3) NOT NULL AUTO_INCREMENT,
  `roles` text CHARACTER SET utf8,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- ----------------------------
--  Records of `roles`
-- ----------------------------
BEGIN;
INSERT INTO `roles` VALUES ('1', '超级管理员'), ('2', '管理员');
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
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=latin1;

-- ----------------------------
--  Records of `token`
-- ----------------------------
BEGIN;
INSERT INTO `token` VALUES ('5', '1523244889309', '1523244889309', '1'), ('6', '1523244998061', '1523849798061', '1'), ('7', '1523246402985', '1523851202985', '1'), ('8', '1523246432806', '1523851232806', '1'), ('9', '1523246436028', '1523851236028', '1'), ('10', '1523246621393', '1523851421393', '1'), ('11', '1523246970238', '1523851770238', '1'), ('12', '1523247062924', '1523851862924', '1'), ('13', '1523247195003', '1523851995003', '1'), ('14', '1523247442854', '1523852242854', '1'), ('15', '1523247590176', '1523852390176', '1'), ('16', '1523247840599', '1523852640599', '1'), ('17', '1523247971913', '1523852771913', '1'), ('18', '1523248096388', '1523852896388', '1'), ('19', '1523248193901', '1523852993901', '1'), ('20', '1523248237648', '1523853037648', '1'), ('21', '1523248363473', '1523853163473', '1'), ('22', '1523248841545', '1523853641545', '1'), ('23', '1523249289266', '1523854089266', '1'), ('24', '1523249348020', '1523854148020', '1'), ('25', '1523249371670', '1523854171670', '1'), ('26', '1523249880695', '1523854680695', '1'), ('27', '1523250649896', '1523855449896', '1'), ('28', '1523250698406', '1523855498406', '1'), ('29', '1523250751396', '1523855551396', '1'), ('30', '1523250797134', '1523855597134', '1'), ('31', '1523250868484', '1523855668484', '1'), ('32', '1523250945370', '1523855745370', '1'), ('33', '1523251095378', '1523855895378', '1'), ('34', '1523251102065', '1523855902065', '2'), ('35', '1523251123918', '1523855923918', '1'), ('36', '1523251549266', '1523856349266', '1'), ('37', '1523251575401', '1523856375401', '1'), ('38', '1523251608821', '1523856408821', '1'), ('39', '1523251698179', '1523856498179', '1');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
