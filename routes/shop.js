const express = require("express");

const shopControllers = require("../controllers/shop");

const router = express.Router();

router.get("/", shopControllers.shopGetProducts)

router.get("/home", shopControllers.shopGetHome);

router.get("/about", shopControllers.shopGetAbout);

router.get("/cart", shopControllers.shopGetCart);

router.post("/cart", shopControllers.shopPostCart);

router.get("/my-orders", shopControllers.shopGetOrders);

router.get("/evening-dresses", shopControllers.shopGetEveningDresses);

router.get("/casual-dresses", shopControllers.shopGetCasualDresses);

router.get("/floral-dresses", shopControllers.shopGetFloralDresses);

router.get("/all-products-list/:productID", shopControllers.shopGetProduct);

router.get("/all-products-list", shopControllers.shopGetAllProductsList);

module.exports = router;