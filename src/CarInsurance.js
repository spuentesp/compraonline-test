class CarInsurance{

    updatePrice(product){
        //no permie que el precio pase de 50
        if(product.price >=50) return product;
        //revisa cada condicion de producto
        switch(product.name){
            //legendario, siempre queda igual
            case "Mega Coverage":
                return this.megaCoverage(product);
                break;
            case "Full Coverage":
                return this.fullCoverage(product);
                break;
            case "Special Full Coverage":
                return this.specialFullCoverage(product);
                break;
            case "Super Sale":
                return this.superSale(product);
                break;
            default:
                return this.priceCalc(product);
                break;
        }
    }

    //nunca cambia de valor.
    megaCoverage(product){
        return product;
    }

    //full coverage aumenta con cada dia que pasa
    fullCoverage(product){
        product.sellin--;
        product.price++;
        return product;
    }


    //specialFullCoverage aumenta en +2 cuando quedan 10 dias, en +3 cuando quedan 5, pero al agotarse 
    //se queda en 0.
    specialFullCoverage(product){
        if(product.sellin > 10){
            //caso normal de calculo
            return this.fullCoverage(product);
        }
        if(product.sellin > 5){
            product.price = product.price -2;
            product.sellin--;
            return product;
        }
        if(product.sellin > 0){
            product.price = product.price -3;
            product.sellin--;
            return product;
        }
        //si no retorna previamente los valores son 0.
        product.price = 0;
        product.sellin = 0;
        return product;
    }

    //supersale pierde valor el doble de rapido.
    superSale(product){
        product.price = product.price -2;
        product.sellin--;
        return product;
    }

    //metodo por defecto. pierde valor con cada dia.
    priceCalc(product){
        product.sellin--;
        product.price--;
        return product;
    }

}