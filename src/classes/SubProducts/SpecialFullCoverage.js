import { Product } from "../Product";

export class SpecialFullCoverage extends Product{
    
    updatePrice(){
        if(this.sellIn > 10){
            //caso normal de calculo
            return;
        } else
        if(this.sellIn > 5){
            (this.price < 50 && this.price >0) ? this.price = this.price -2 : this.price;
            this.sellIn--;
            return;
        } else 
        if(this.sellIn > 0){
            (this.price < 50 && this.price >0) ? this.price = this.price -3 : this.price;
            this.sellIn--;
            return;
        }else {
        //si no retorna previamente los valores son 0.
        this.price = 0;
        this.sellIn = 0;
        }
    }

}
