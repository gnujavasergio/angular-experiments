// Variable global la podemos utilizar de cualquier lugar
var firstName = 'Sergio Ochoa';

{
  let nombre = "Sergio";
  console.log(nombre);
  {
    let nombre = "Claudia";
    console.log(nombre);
  }
}

// Aqui lo utiliza como una variable globar
// Siempre imprimi 10
for(var i = 0; i < 10; i++){
  setTimeout(function(){
    console.log(i);
  }, 100);
}

// Utilizando let para que imprima todos los i
for(let i = 0; i < 10; i++){
  setTimeout(function(){
    console.log(i);
  }, 100);
}

const contador = 1;
contador = 2; // error porque no se puede modificar una constante