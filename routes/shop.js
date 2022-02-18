const express = require("express");
const path = require("path");
const productsControllers = require("../controllers/products");

const router = express.Router();

router.get("/", productsControllers.shopGetProducts);

module.exports = router;