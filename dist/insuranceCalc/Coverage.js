"use strict";

class Coverage {
  calc(product) {
    product.sellin--;
    product.price--;
    return product;
  }

}