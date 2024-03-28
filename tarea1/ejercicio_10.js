function sumNumeros(numeros) {
    let suma = 0;
    for (let numero of numeros) {
        suma += numero;
    }
    return suma;
}

// Array de números
var numerosEjemplo = [5, 10, 15, 20];

// Llamada a la función para sumar
var resultado = sumNumeros(numerosEjemplo);

// Imprimir
console.log("La suma del array es: " + resultado);
