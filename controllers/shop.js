const Product = require("../models/product")

exports.shopGetProducts = (req, res, next)=>{
    Product.fetchProducts(products=>{
        res.render("all-products-admin", {
        prod: products, 
        docTitle: "All Products Admin",
        path: "/all-products-admin",
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
    Product.fetchProducts(products=>{
        res.render("all-products-admin", {
        prod: products, 
        docTitle: "All Products Admin",
        path: "/floral-dresses",
    });
   
        // hasProducts: products.length > 0,
        // activeShop: true,
        // productCSS: true
    });
};

exports.shopGetEveningDresses = (req, res, next)=>{
    Product.fetchProducts(products=>{
        res.render("all-products-admin", {
        prod: products, 
        docTitle: "All Products Admin",
        path: "/evening-dresses",
    });
   
        // hasProducts: products.length > 0,
        // activeShop: true,
        // productCSS: true
    });
};

exports.shopGetCasualDresses = (req, res, next)=>{
    Product.fetchProducts(products=>{
        res.render("all-products-admin", {
        prod: products, 
        docTitle: "All Products Admin",
        path: "/casual-dresses",
    });   
        // hasProducts: products.length > 0,
        // activeShop: true,
        // productCSS: true
    });
};

