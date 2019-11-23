"use strict";

class SuperSaleCoverage extends Coverage {
  calc(product) {
    product.price = product.price - 2;
    product.sellin--;
    return product;
  }

}