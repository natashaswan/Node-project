const express = require("express");
const adminControllers = require("../controllers/admin");

const router = express.Router();

router.get("/add-product", adminControllers.addProductGet);

router.post("/add-product", adminControllers.addProductPost);

router.get("/all-products-admin", adminControllers.allProductsGet);

router.get("/product-edit/:productID", adminControllers.productEdit);

router.post("/delete-product", adminControllers.deleteProduct)

exports.routes = router;
