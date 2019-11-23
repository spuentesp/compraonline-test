
import { expect } from 'chai';
import { Product} from '../src/classes/Product';
import {FullCoverage } from '../src/classes/SubProducts/FullCoverage';
import {MegaCoverage } from '../src/classes/SubProducts/MegaCoverage';
import {SpecialFullCoverage } from '../src/classes/SubProducts/SpecialFullCoverage';
import {SuperSale } from '../src/classes/SubProducts/SuperSale';

describe("Co Test", function() {
  
  it("should create a new Product", function() {
    let newProd = new Product('Medium Coverage', 10, 20)
    expect(newProd.name).equal("Medium Coverage");
    expect(newProd.sellIn).equal(10);
    expect(newProd.price).equal(20);
  });

  it("should calculate product value", function() {
    let newProd = new Product('Producto DERP', 10, 20)
    newProd.updatePrice();
    expect(newProd.name).equal("Producto DERP");
    expect(newProd.sellIn).equal(9);
    expect(newProd.price).equal(19);
  });


  it("should calculate Mega Coverage", function() {
    let newProd = new MegaCoverage('Mega Coverage', 10, 20)
    newProd.updatePrice();
    expect(newProd.name).equal("Mega Coverage");
    expect(newProd.sellIn).equal(10);
    expect(newProd.price).equal(80);
  });

  it("should calculate Full Coverage", function() {
    let newProd = new FullCoverage("Full Coverage", 10, 20)
    newProd.updatePrice();
    expect(newProd.name).equal("Full Coverage");
    expect(newProd.sellIn).equal(9);
    expect(newProd.price).equal(21);
  });

  it("should calculate Special Full Coverage", function() {
    let newProd = new SpecialFullCoverage('Special Full Coverage', 10, 20)
    newProd.updatePrice();
    expect(newProd.name).equal("Special Full Coverage");
    expect(newProd.sellIn).equal(9);
    expect(newProd.price).equal(18);
  });

  it("should calculate Special Full Coverage under 5", function() {
    let newProd = new SpecialFullCoverage('Special Full Coverage', 10, 4)
    newProd.updatePrice();
    expect(newProd.name).equal("Special Full Coverage");
    expect(newProd.sellIn).equal(9);
    expect(newProd.price).equal(2);
  });

  it("should calculate super sale", function() {
    let newProd = new SuperSale('Super Sale', 10, 20)
    newProd.updatePrice();
    expect(newProd.name).equal("Super Sale");
    expect(newProd.sellIn).equal(9);
    expect(newProd.price).equal(18);
  });

});