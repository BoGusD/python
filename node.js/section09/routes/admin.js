const path = require("path");

const express = require("express");

const adminController = require("../controllers/admin");

const router = express.Router();

//항상 코드는 위에서 아래로 파싱된다.

// /admin/add-product => GET
router.get("/add-product", adminController.getAddProduct);

// /admin/products => GET
router.get("/products", adminController.getProducts);

// /admin/add-product => POST
router.post("/add-product", adminController.postAddProduct);

//router.get("/products/delete") >> productId 위에 사용해줘야함
// 아래에 위치해 있으면 동적 세그먼트 취급을 받기 때문에 productId 로직에 먹힘

router.get("/edit-product/:productId", adminController.getEditProduct);

router.post("/edit-product", adminController.postEditProduct);

router.post("/delete-product", adminController.postDeleteProduct);

module.exports = router;
