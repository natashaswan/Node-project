const products = [];

module.exports = class Product {
    constructor(_title, _price, _description){
        this.title = _title;
        this.price = _price;
        this.description = _description;
    }
    saveProducts(){
        products.push(this);
    }
    static fetchProducts(){
        return products;
    }
}