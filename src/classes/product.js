export class Product{
    constructor(name,sellin,price){
        
        this.sellIn = sellin;
        this.price = price;
        this.name = name;
    }


    updatePrice(){
        this.sellIn--;
        (this.price < 50 && this.price >0) ? this.price-- : this.price;
    }

    print(){
        console.log(`${this.name}, ${this.sellIn}, ${this.price}`);
    }
}
