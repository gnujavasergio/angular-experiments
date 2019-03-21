const numbers = [1, 2, 3, 4, 5];

console.log(...numbers);

const suma = (...numeros) => {
	const result = numeros.reduce((sum, numero) => {
		sum += numero;
		return sum;
	});
  console.log(result);
}

suma(1,2,3,4,5);
