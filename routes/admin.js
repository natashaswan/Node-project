const express = require("express");
const path = require("path");
const productsControllers = require("../controllers/products");

const router = express.Router();

router.get("/add-product",productsControllers.addProductGet);

router.post("/add-product",productsControllers.addProductPost);

exports.routes = router;
