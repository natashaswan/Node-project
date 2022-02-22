const path = require("path");
const fs = require("fs");
//const pathUtil = require("../utils/path")

 

module.exports = class Product {
    constructor(_title, _price, _description){
        this.title = _title;
        this.price = _price;
        this.description = _description;
    }
    saveProducts(){  
        const dataPath = path.join(
            __dirname,
            "../", 
            "data", 
            "/products.json"
            );
        console.log(dataPath); 

        fs.readFile(dataPath, (err, fileData)=>{            
            let products = [];
            if(!err){
                products = JSON.parse(fileData);
            }
            products.push(this);
            fs.writeFile(dataPath, JSON.stringify(products), (err)=>{
                console.log(err);
            });
        });      
    }
    static fetchProducts(cb){
        const dataPath = path.join(
            __dirname,
            "../", 
            "data", 
            "/products.json"
        );
        fs.readFile(dataPath, (err, fileData)=>{
            if (err){
                cb([]);
            }
           cb(JSON.parse(fileData));
    
        });
    }
}