console.log("Classes in Js");

class Product{
    constructor(name,price){
        this.name=name;
        this.price=price;
    }

    displayProduct(){
        console.log(`Product : ${this.name}`);
        console.log(`Price : LKR ${this.price.toFixed(2)}`);
    }

    calculateTotal(taxRate){
        return this.price + this.price*(taxRate/100);
    }
}

const product1 = new Product('Shirt', 1500);
const product2 = new Product('Shoes',6500);
const product3 = new Product('Trousers', 3000);


product1.displayProduct();
console.log( `Shirt Price with tax :  LKR ${product1.calculateTotal(5).toFixed(2)}`);
product2.displayProduct();
product3.displayProduct();