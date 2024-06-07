/*
 Navicat Premium Data Transfer

 Source Server         : menu
 Source Server Type    : MySQL
 Source Server Version : 80035 (8.0.35-0ubuntu0.23.04.1)
 Source Host           : vps-65482c69.vps.ovh.net:3306
 Source Schema         : MENU

 Target Server Type    : MySQL
 Target Server Version : 80035 (8.0.35-0ubuntu0.23.04.1)
 File Encoding         : 65001

 Date: 07/06/2024 07:22:18
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for CATEGORIA
-- ----------------------------
DROP TABLE IF EXISTS `CATEGORIA`;
CREATE TABLE `CATEGORIA`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 13 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for DETALLE_PEDIDO
-- ----------------------------
DROP TABLE IF EXISTS `DETALLE_PEDIDO`;
CREATE TABLE `DETALLE_PEDIDO`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_pedido` int NOT NULL,
  `id_producto` int NOT NULL,
  `cantidad` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `id_pedido`(`id_pedido` ASC) USING BTREE,
  INDEX `id_producto`(`id_producto` ASC) USING BTREE,
  CONSTRAINT `DETALLE_PEDIDO_ibfk_1` FOREIGN KEY (`id_pedido`) REFERENCES `PEDIDO` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `DETALLE_PEDIDO_ibfk_2` FOREIGN KEY (`id_producto`) REFERENCES `PRODUCTO` (`ID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for PEDIDO
-- ----------------------------
DROP TABLE IF EXISTS `PEDIDO`;
CREATE TABLE `PEDIDO`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `fecha` timestamp NULL DEFAULT NULL,
  `id_usuario` int NULL DEFAULT NULL,
  `total` float NULL DEFAULT NULL,
  `terminado` tinyint(1) NULL DEFAULT 0,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `id_usuario`(`id_usuario` ASC) USING BTREE,
  CONSTRAINT `PEDIDO_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `USUARIO` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for PRODUCTO
-- ----------------------------
DROP TABLE IF EXISTS `PRODUCTO`;
CREATE TABLE `PRODUCTO`  (
  `ID` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `descripcion` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `foto` varchar(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `id_catego` int NULL DEFAULT NULL,
  `precio` float NULL DEFAULT NULL,
  PRIMARY KEY (`ID`) USING BTREE,
  INDEX `id_catego`(`id_catego` ASC) USING BTREE,
  CONSTRAINT `PRODUCTO_ibfk_1` FOREIGN KEY (`id_catego`) REFERENCES `CATEGORIA` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 26 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for USUARIO
-- ----------------------------
DROP TABLE IF EXISTS `USUARIO`;
CREATE TABLE `USUARIO`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `pass` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `email` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for VALORACION
-- ----------------------------
DROP TABLE IF EXISTS `VALORACION`;
CREATE TABLE `VALORACION`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `valor` enum('1','2','3','4','5') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '5',
  `id_producto` int NULL DEFAULT NULL,
  `id_usuario` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `id_usuario`(`id_usuario` ASC) USING BTREE,
  INDEX `id_producto`(`id_producto` ASC) USING BTREE,
  CONSTRAINT `VALORACION_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `USUARIO` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `VALORACION_ibfk_2` FOREIGN KEY (`id_producto`) REFERENCES `PRODUCTO` (`ID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;
