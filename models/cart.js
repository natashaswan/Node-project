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
        let cartObj = {
            title: "title",
            id: 0,
            price: 0,
            quantity: 0,
            totalPrice: 0
        }
        
        fs.readFile(cartPath, (err, fileContent)=>{
            let cart = [];
            if (!err && fileContent.length > 0){
                cart = JSON.parse(fileContent);
                if (cart.findIndex(el=>el.id == id)){
                    cart[cart.findIndex(el=>el.id==id)].totalPrice = totalPrice*2;
                    cart[cart.findIndex(el=>el.id==id)].quantity = quantity++;
                }
                fs.writeFile(cartPath, JSON.stringify(cart), err => {
                    console.log(err);
                    });
            }

            else {
                fs.readFile(dataPath, (err, dataContent)=>{
                    let addedProd = dataContent.find(el=> el.id == id);
                    cartObj.title = addedProd.title;
                    cartObj.price = addedProd.price;   
                    cartObj.totalPrice = addedProd.price;                 
                });
                fs.writeFile(cartPath, JSON.stringify(cartObj), err => {
                    console.log(err);
                    });
            }
        })

    } 

    static fetchCart(){
        fs.readFile(cartPath, (err, fileContent)=>{
            console.log(JSON.stringify(fileContent))
        })
    }
}