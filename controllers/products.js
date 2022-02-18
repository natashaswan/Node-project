const products = [];

exports.addProductGet = (req, res, next)=>{
    res.render("add-product", {
        docTitle: "Add product admin page",
        // path: "/admin/add-product",
        // formsCSS: true,
        // productCSS: true,
        // activeAddProduct: true
     });
 };

 exports.addProductPost = (req, res, next)=>{
    products.push({
        newProductTitle: req.body.title, 
        newProductPrice: req.body.price, 
        newProductDescription: req.body.description});    
    res.redirect("/");
};

exports.shopGetProducts = (req, res, next)=>{
    console.log(products);
    //render method allows a second arg 
    //to pass data to be used
    res.render("shop", {
        prod: products, 
        docTitle: "Shop",
        // path: "/",
        // hasProducts: products.length > 0,
        // activeShop: true,
        // productCSS: true
    });
};      

exports.products = products;
