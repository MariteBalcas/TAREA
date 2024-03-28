//Declara una variable fuera de la función 
var variableF = "variable fuera x";

// Declara una función que utiliza una variable dentro
function VariableDen() {
    // Declara una variable dentro de la función 
    var variableD = "variable dentro y";
    console.log("Dentro de la función (variable dentro):", variableD);

    // Intenta acceder a la variable fuera desde dentro de la función
    console.log("Dentro de la función (variable fuera x):", variableF);
}

// Intenta acceder a la variable fuera desde fuera de la función
console.log("Fuera de la función (variable fuera x):", variableF);

// Llama a la función que accede a ambas variables
VariableDen();