function suma1(a, b, c) {
	a = a || 0;
	b = b || 0;
	c = c || 0;
	let suma = a + b + c;
	console.log(suma);
}

suma1(1, 2, 3);

const suma2 = (a = 0, b = 0, c = 0) => {
	let suma = a + b + c;
	console.log(suma);
};

suma2(1, 2);
