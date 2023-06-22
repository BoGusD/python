const path = require("path");

const express = require("express");

const shopController = require("../controllers/shop");

const router = express.Router();

//항상 코드는 위에서 아래로 파싱된다.

router.get("/", shopController.getIndex);

router.get("/products", shopController.getProducts);

//router.get("/products/delete") >> 동적 경로가 아니기에 productId 위에 사용해줘야함

router.get("/products/:productId", shopController.getProduct);

router.get("/cart", shopController.getCart);

router.get("/orders", shopController.getOrders);

router.get("/checkout", shopController.getCheckout);

module.exports = router;
