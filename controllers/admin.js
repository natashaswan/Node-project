const Product = require("../models/product")

exports.allProductsGet = (req, res, next)=>{
    Product.fetchProducts(products=>{
        res.render("../views/admin/all-products-admin", {
        prod: products, 
        docTitle: "All Products Admin",
        path: "admin/all-products-admin",
    });
   
        // hasProducts: products.length > 0,
        // activeShop: true,
        // productCSS: true
    });
};

exports.addProductGet = (req, res, next)=>{
        res.render("../views/admin/add-product", {
        docTitle: "Add product admin page",
        path: "/admin/add-product",
        // formsCSS: true,
        // productCSS: true,
        // activeAddProduct: true
     });
 };

 exports.addProductPost = (req, res, next)=>{
    const product = new Product(
        req.body.title, 
        req.body.price, 
        req.body.description,
        req.body.image,
        req.body.category.selected,
        req.body.id
        ); 
    product.saveProducts();
    res.redirect("/");
};

