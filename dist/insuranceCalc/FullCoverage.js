"use strict";

class FullCoverage extends Coverage {
  calc(product) {
    product.sellin--;
    product.price++;
    return product;
  }

}