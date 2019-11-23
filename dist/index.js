"use strict";

var _Product = require("./classes/Product");

var _CarInsurance = require("./insuranceCalc/CarInsurance");

const productsAtDayZero = [new _Product.Product('Medium Coverage', 10, 20), new _Product.Product('Full Coverage', 2, 0), new _Product.Product('Low Coverage', 5, 7), new _Product.Product('Mega Coverage', 0, 80), new _Product.Product('Mega Coverage', -1, 80), new _Product.Product('Special Full Coverage', 15, 20), new _Product.Product('Special Full Coverage', 10, 49), new _Product.Product('Special Full Coverage', 5, 49), new _Product.Product('Super Sale', 3, 6)];
const carInsurance = new _CarInsurance.CarInsurance();

const productPrinter = function productPrinter(product) {
  console.log("".concat(product.name, ", ").concat(product.sellIn, ", ").concat(product.price));
};

for (let i = 1; i <= 30; i += 1) {
  console.log("Day ".concat(i));
  console.log('name, sellIn, price');

  for (let p of productsAtDayZero) {
    productPrinter(carInsurance.updatePrice(p));
  }

  console.log('');
}