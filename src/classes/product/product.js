class product{
    sellin = null;
    price = null;
    name = null;


    constructor(name,sellin,price){
        this.sellin = sellin;
        this.price = price;
        this.name = name;
    }

    //standard rule for price updating. if it is zero, leaves it as it is.
    updatePrice(){
        sellin > 0 ? sellin-- : price;
        price > 0 ? price-- : price;
    }
}