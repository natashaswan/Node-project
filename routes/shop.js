const express = require("express");

const shopControllers = require("../controllers/shop");

const router = express.Router();

router.get("/", shopControllers.shopGetProducts);

router.get("/home", shopControllers.shopGetHome);

router.get("/about", shopControllers.shopGetAbout);

router.get("/cart", shopControllers.shopGetCart);

router.get("/evening-dresses", shopControllers.shopGetEveningDresses);

router.get("/casual-dresses", shopControllers.shopGetCasualDresses);

router.get("/floral-dresses", shopControllers.shopGetFloralDresses);

module.exports = router;