import {Product} from './classes/Product';
import {FullCoverage } from './classes/SubProducts/FullCoverage';
import {MegaCoverage } from './classes/SubProducts/MegaCoverage';
import {SpecialFullCoverage } from './classes/SubProducts/SpecialFullCoverage';
import {SuperSale } from './classes/SubProducts/SuperSale';

const productsAtDayZero = [
    new Product('Medium Coverage', 10, 20),
    new FullCoverage('Full Coverage', 2, 0),
    new Product('Low Coverage', 5, 7),
    new MegaCoverage('Mega Coverage', 0, 80),
    new MegaCoverage('Mega Coverage', -1, 80),
    new SpecialFullCoverage('Special Full Coverage', 15, 20),
    new SpecialFullCoverage('Special Full Coverage', 10, 49),
    new SpecialFullCoverage('Special Full Coverage', 5, 49),
    new SuperSale('Super Sale', 3, 6),
  ];

for (let i = 1; i <= 30; i += 1) {
  console.log(`Day ${i}`);
  console.log('name, sellIn, price');
  for(let p of productsAtDayZero){
    p.updatePrice();
    p.print();
  }
  console.log('');
}