//push
const arreglo1 = [1, 2, 3];
arreglo1.push(4, 5);
console.log(arreglo1); 
//pop()
const arreglo2 = [1, 2, 3];
const ultimoElemento = arreglo2.pop();
console.log(ultimoElemento); // Imprime: 3
console.log(arreglo2); // Imprime: [1, 2]
//shift()
const arreglo3 = [1, 2, 3];
const primerElemento = arreglo3.shift();
console.log(primerElemento); // Imprime: 1
console.log(arreglo3); // Imprime: [2, 3]
//forEach(funcion)
const arreglo = [1, 2, 3];
arreglo.forEach(elemento => console.log(elemento * 2)); // Imprime: 2, 4, 6
