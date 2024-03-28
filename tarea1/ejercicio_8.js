//objeto persona
var persona = {
    nombre: "MARITE",
    edad: 20,
    genero: "femenino",
    profesion: "estudiante",
    ciudad: "Potosi"
};

// imprimir información sobre la persona
function informacion(persona) {
    console.log("Nombre: " + persona.nombre);
    console.log("Edad: " + persona.edad);
    console.log("Género: " + persona.genero);
    console.log("Profesión: " + persona.profesion);
    console.log("Ciudad: " + persona.ciudad);
}

//imprimir información de la persona
informacion(persona);
