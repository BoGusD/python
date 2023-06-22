const path = require("path");

const express = require("express");

const shopController = require("../controllers/shop");

const router = express.Router();

//항상 코드는 위에서 아래로 파싱된다.

router.get("/", shopController.getIndex);

router.get("/products", shopController.getProducts);

router.get("/products/:productId", shopController.getProduct);

router.get("/cart", shopController.getCart);

router.get("/orders", shopController.getOrders);

router.get("/checkout", shopController.getCheckout);

module.exports = router;
