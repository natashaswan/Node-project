const Product = require("../models/product")

exports.shopGetProducts = (req, res, next)=>{
    Product.fetchProducts(products=>{
        res.render("shop", {
        prod: products, 
        docTitle: "Shop",
        path: "/",
    });
   
        // hasProducts: products.length > 0,
        // activeShop: true,
        // productCSS: true
    });
};      

exports.shopGetCart = (req, res, next)=>{
        res.render("cart", {
         
        docTitle: "Cart",
        path: "/cart",
    });
}; 

exports.shopGetHome = (req, res, next)=>{
    res.render("home", {
     
    docTitle: "Homepage",
    path: "/home",
});
};

exports.shopGetAbout = (req, res, next)=>{
    res.render("about", {
     
    docTitle: "About",
    path: "/about",
});
};

exports.shopGetFloralDresses = (req, res, next)=>{
    res.render("floral-dresses", {
     
    docTitle: "Floral dresses",
    path: "/floral-dresses",
});
};

exports.shopGetEveningDresses = (req, res, next)=>{
    res.render("evening-dresses", {
     
    docTitle: "Evening Dresses dresses",
    path: "/evening-dresses",
});
};

exports.shopGetCasualDresses = (req, res, next)=>{
    res.render("casual-dresses", {     
    docTitle: "Evening Dresses dresses",
    path: "/casual-dresses",
});
};

