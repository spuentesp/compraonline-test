import { Product } from "../Product";

export class FullCoverage extends Product{
   
            updatePrice(){
                this.sellIn--;
                (this.price < 50 && this.price >0) ? this.price++ : this.price;
        
            }
}
