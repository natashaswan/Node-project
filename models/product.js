const path = require("path");
const fs = require("fs");
const { stringify } = require("querystring");
//const pathUtil = require("../utils/path")
const dataPath = path.join(
    __dirname,
    "../", 
    "data", 
    "/products.json"
);
 

module.exports = class Product {
    constructor(_title, _price, _description){
        this.title = _title;
        this.price = _price;
        this.description = _description;
    }
    saveProducts(){  
             
        fs.readFile(dataPath, (err, fileData)=>{
            let products = [];
            if(!err){
                products = JSON.parse(fileData);
                
            }
            
            products.push(this)
            fs.writeFile(dataPath, JSON.stringify(products, null, 2), (err)=>{
                console.log(err);
            })
           
        })
        



        // fs.readFile(dataPath, (err, fileData)=>{            
        //     let products = [];
        //     products.push(this);
        //     if(!err){
        //         return products = JSON.parse(fileData);
        //     }
            
        //     fs.writeFile(dataPath, JSON.stringify(products), (err)=>{
        //         console.log(err);
        //     });
        // });      
    }
    static fetchProducts(cb){
        console.log("trying to read data")
        console.log(dataPath.length)
        fs.readFile(dataPath, (err, fileData)=>{
            if (err || dataPath.length === 0){
                return cb([]);
            }
           cb(JSON.parse(fileData));
    
        });
    }
}