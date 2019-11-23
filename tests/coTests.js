
import { expect } from 'chai';
import { CarInsurance} from '../src/insuranceCalc/CarInsurance';
import { Product} from '../src/classes/Product';

var ci = new CarInsurance();
describe("Co Test", function() {
  
  it("should create a new Product", function() {
    let newProd = new Product('Medium Coverage', 10, 20)
    expect(newProd.name).equal("Medium Coverage");
    expect(newProd.sellIn).equal(10);
    expect(newProd.price).equal(20);
  });

  it("should calculate product value", function() {
    let newProd = new Product('Producto DERP', 10, 20)
    newProd = ci.updatePrice(newProd);
    expect(newProd.name).equal("Producto DERP");
    expect(newProd.sellIn).equal(9);
    expect(newProd.price).equal(19);
  });


  it("should calculate Mega Coverage", function() {
    let newProd = new Product('Mega Coverage', 10, 20)
    newProd = ci.updatePrice(newProd);
    expect(newProd.name).equal("Mega Coverage");
    expect(newProd.sellIn).equal(10);
    expect(newProd.price).equal(80);
  });

  it("should calculate Full Coverage", function() {
    let newProd = new Product("Full Coverage", 10, 20)
    newProd = ci.updatePrice(newProd);
    expect(newProd.name).equal("Full Coverage");
    expect(newProd.sellIn).equal(9);
    expect(newProd.price).equal(21);
  });

  it("should calculate Special Full Coverage", function() {
    let newProd = new Product('Special Full Coverage', 10, 20)
    newProd = ci.updatePrice(newProd);
    expect(newProd.name).equal("Special Full Coverage");
    expect(newProd.sellIn).equal(9);
    expect(newProd.price).equal(18);
  });

  it("should calculate Special Full Coverage under 5", function() {
    let newProd = new Product('Special Full Coverage', 10, 4)
    newProd = ci.updatePrice(newProd);
    expect(newProd.name).equal("Special Full Coverage");
    expect(newProd.sellIn).equal(9);
    expect(newProd.price).equal(2);
  });

  it("should calculate super sale", function() {
    let newProd = new Product('Super Sale', 10, 20)
    newProd = ci.updatePrice(newProd);
    expect(newProd.name).equal("Super Sale");
    expect(newProd.sellIn).equal(9);
    expect(newProd.price).equal(18);
  });

});