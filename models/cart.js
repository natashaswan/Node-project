const fs = require("fs");
const path = require("path");
const cartPath = path.join(
    __dirname,
    "../", 
    "data", 
    "/cart.json"
);
const dataPath = path.join(
    __dirname,
    "../", 
    "data", 
    "/products.json"
);

module.exports = class Cart {    
    static addProduct(id){
        let cartProducts = [];
        fs.readFile(dataPath, (err, allProductsData)=>{
            if (err){
                console.log(err);
            }
            cartProducts = JSON.parse(allProductsData);              
            console.log(cartProducts);        
        })
        fs.writeFile(cartPath, JSON.stringify(cartProducts, null, 2), (err)=>{
            console.log(err);
        })
    }
}

// fs.readFile(dataPath, (err, fileData)=>{
//     let products = [];
//     if(fileData.length !== 0){
//         products = JSON.parse(fileData);                                
//     }           
//     products.push(this)
//     fs.writeFile(dataPath, JSON.stringify(products, null, 2), (err)=>{
//         console.log(err);
//     })    

