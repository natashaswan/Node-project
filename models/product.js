const path = require("path");
const fs = require("fs");
const { stringify } = require("querystring");


const dataPath = path.join(
    __dirname,
    "../", 
    "data", 
    "/products.json"
);

module.exports = class Product {
    constructor(_title, _price, _description, _image, _id, _category){
        this.title = _title;
        this.price = _price;
        this.description = _description;
        this.image = _image;
        this.category = _category;
        this.id = Math.floor(Math.random() * 100);
    }
    
    saveProducts(){              
        fs.readFile(dataPath, (err, fileData)=>{
            let products = [];
            if(fileData.length !== 0){
                products = JSON.parse(fileData);                                
            }           
            products.push(this)
            fs.writeFile(dataPath, JSON.stringify(products, null, 2), (err)=>{
                console.log(err);
            })           
        })
    }

    static fetchProducts(cb){        
        fs.readFile(dataPath, (err, fileData)=>{
            if (err || fileData.length === 0){
                return cb([]);
            }
           cb(JSON.parse(fileData));    
            });
    }   

    // NOT WORKING, NEED TO FIX
    static fetchProductById(id, cb){
        let fetchedProduct = {};
        this.fetchProducts(products=>{  
            let fetchedProductIndex = products.findIndex(el => el.id == id); 
            fetchedProduct = products[fetchedProductIndex];
        });
        cb(fetchedProduct);
    }
};