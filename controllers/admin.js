const Product = require("../models/product")


exports.allProductsGet = (req, res, next)=>{
    Product.fetchProducts(products=>{
        res.render("../views/admin/all-products-admin", {
        prod: products, 
        docTitle: "All Products Admin",
        path: "admin/all-products-admin",
        edit: true
        
    });
   
        // hasProducts: products.length > 0,
        // activeShop: true,
        // productCSS: true
    });
};

exports.addProductGet = (req, res, next)=>{
    res.render("admin/add-product", {
        docTitle: "Add product admin page",
        path: "/admin/add-product",
        edit: false
        // formsCSS: true,
        // productCSS: true,
        // activeAddProduct: true
     });
 };

 exports.addProductPost = (req, res, next) => {
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

exports.productEdit = (req, res, next) => {
    const productID = req.params.productID;    
    Product.fetchProducts(products=>{
        let product = products.find(el => el.id == productID);
        res.render("admin/add-product",{
        prod: product,
        docTitle: "Product Details",
        path: "/product-edit/productID",
        edit: true
        });
    });      
};



exports.deleteProduct = (id, cb)=>{
    const productID = req.body.productID;
    fetchProductById(id, (product)=>{
        
    })
};
