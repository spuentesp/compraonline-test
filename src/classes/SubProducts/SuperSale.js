import { Product } from "../Product";

export class SuperSale extends Product{
        
    updatePrice(){
        (this.price < 50 && this.price >0) ? this.price = this.price -2 : this.price;
        this.sellIn--;
    }
    
}
