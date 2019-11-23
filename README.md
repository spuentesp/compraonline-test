# compraonline-test

La prueba consta de dos soluciones implementadas.

## Solucion 1:
- Se crea la clase Product, que simboliza cada producto.
- Se crea CarInsurance, responsable del calculo de valores.

Los productos entran al metodo "UpdatePrice" de CarInsurance. Para extender esta clase, basta con crear un nuevo metodo de calculo, y agregarlo a la lista de casos en el metodo.

Ejecutar con:
npm run start
Tests:
npm run tests

## Solucion 2:
- Se crea la clase Product, que simboliza cada producto. La clase product contiene su propia logica de calculo en el metodo UpdatePrice dentro de ella.
- Se crean subclases que heredan de Product, que simbolizan cada tipo distinto de producto. El Metodo UpdateProduct es "pisado" por override para cambiar las reglas de calculo de cada producto.

Ejecutar con:
npm run start2
Tests:
npm run tests2
