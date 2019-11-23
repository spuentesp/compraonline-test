"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Product = void 0;

class Product {
  constructor(name, sellin, price) {
    this.sellin = sellin;
    this.price = price;
    this.name = name;
  }

}

exports.Product = Product;