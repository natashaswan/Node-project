const { redirect } = require("express/lib/response");
const Cart = require("../models/cart");
const Product = require("../models/product")
 
exports.shopGetFloralDresses = (req, res, next)=>{
    Product.fetchProducts(products=>{
        res.render("floral-dresses", {
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
        res.render("evening-dresses", {
        prod: products, 
        docTitle: "All Products Admin",
        path: "/evening-dresses",
    });

    });
};

exports.shopGetCasualDresses = (req, res, next)=>{
    Product.fetchProducts(products=>{
        res.render("casual-dresses", {
        prod: products, 
        docTitle: "All Products Admin",
        path: "/casual-dresses",
    });   
        // hasProducts: products.length > 0,
        // activeShop: true,
        // productCSS: true
    });
};

exports.shopPostCart = (req, res, next)=>{
    const productID  = req.body.productID;
    
};

exports.shopGetCart = (req, res, next)=>{
    const productID = req.productID;
    const cartProduct = Cart.addProduct(productID);
    console.log(cartProduct)
}; 

exports.shopGetOrders = (req, res, next)=>{
    res.render("orders", {         
    docTitle: "My orders",
    path: "/my-orders",
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

exports.shopGetAllProductsList = (req, res, next)=>{
    Product.fetchProducts(products=>{
        res.render("all-products-list", {
        prod: products, 
        docTitle: "All Products",
        path: "/all-products-list",
    });   
        // hasProducts: products.length > 0,
        // activeShop: true,
        // productCSS: true
    });
};

exports.shopGetProduct = (req, res, next)=>{
    const productID = req.params.productID;    
    Product.fetchProductById(productID, product=>{
        res.render("product-page",{
        prod: product,
        docTitle: "Product Details",
        path: "/all-products-list/productID"
        });
    });
};

exports.shopGetProducts = (req, res, next)=>{
    Product.fetchProducts(products=>{
        res.render("../views/admin/all-products-admin", {
        prod: products, 
        docTitle: "All Products Admin",
        path: "/all-products-admin",
    });
   
        // hasProducts: products.length > 0,
        // activeShop: true,
        // productCSS: true
    });
};