const Product = require("../models/product")

exports.addProductGet = (req, res, next)=>{
    res.render("add-product", {
        docTitle: "Add product admin page",
        path: "/admin/add-product",
        // formsCSS: true,
        // productCSS: true,
        // activeAddProduct: true
     });
 };

 exports.addProductPost = (req, res, next)=>{
    const product = new Product(req.body.title, req.body.price, req.body.description); 
    product.saveProducts();
    res.redirect("/");
};

exports.allProductsGet = (req, res, next) =>{
    res.render("all-products-admin",{
    docTitle: "All Products Admin Page",
    path: "/admin/all-products-admin"
    })
}