"use strict";

class SpecialFullCoverage extends Coverage {
  calc(product) {
    if (product.sellin > 10) {
      //caso normal de calculo
      return this.fullCoverage(product);
    }

    if (product.sellin > 5) {
      product.price = product.price - 2;
      product.sellin--;
      return product;
    }

    if (product.sellin > 0) {
      product.price = product.price - 3;
      product.sellin--;
      return product;
    } //si no retorna previamente los valores son 0.


    product.price = 0;
    product.sellin = 0;
    return product;
  }

}