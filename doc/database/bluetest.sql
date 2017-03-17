/*
Navicat PGSQL Data Transfer

Source Server         : localhost
Source Server Version : 90506
Source Host           : localhost:5432
Source Database       : bluetest
Source Schema         : public

Target Server Type    : PGSQL
Target Server Version : 90506
File Encoding         : 65001

Date: 2017-03-17 18:03:25
*/


-- ----------------------------
-- Table structure for sys_func
-- ----------------------------
DROP TABLE IF EXISTS "sys_func";
CREATE TABLE "sys_func" (
"id" int4 NOT NULL,
"name" varchar(50) COLLATE "default",
"status" int2 DEFAULT 0,
"moduleId" int4,
"sortNum" int2 DEFAULT 0,
"createById" int4,
"createAt" int8
)
WITH (OIDS=FALSE)

;
COMMENT ON COLUMN "sys_func"."status" IS '0:有效 1:失效';

-- ----------------------------
-- Records of sys_func
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for sys_module
-- ----------------------------
DROP TABLE IF EXISTS "sys_module";
CREATE TABLE "sys_module" (
"id" int4 NOT NULL,
"name" varchar(50) COLLATE "default" NOT NULL,
"status" int2 DEFAULT 0 NOT NULL,
"parentId" int4,
"createById" int4,
"createAt" int8,
"sortNum" int4
)
WITH (OIDS=FALSE)

;
COMMENT ON COLUMN "sys_module"."status" IS '0:有效 1:失效';

-- ----------------------------
-- Records of sys_module
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for User
-- ----------------------------
DROP TABLE IF EXISTS "User";
CREATE TABLE "User" (
"id" int4 NOT NULL,
"name" varchar(255) COLLATE "default",
"title" varchar(255) COLLATE "default",
"email" varchar(255) COLLATE "default",
"create_at" timestamp(6)
)
WITH (OIDS=FALSE)

;

-- ----------------------------
-- Records of User
-- ----------------------------
BEGIN;
INSERT INTO "User" VALUES ('1', 'test才', 'titleddd', '5555@qq.com', '2017-03-16 11:14:19');
INSERT INTO "User" VALUES ('2', 'lynch', '对对对', '2222@blun.com', '2017-03-15 11:15:05');
COMMIT;

-- ----------------------------
-- Alter Sequences Owned By 
-- ----------------------------

-- ----------------------------
-- Primary Key structure for table sys_func
-- ----------------------------
ALTER TABLE "sys_func" ADD PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table sys_module
-- ----------------------------
ALTER TABLE "sys_module" ADD PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table User
-- ----------------------------
ALTER TABLE "User" ADD PRIMARY KEY ("id");
