const mongoose = require("mongoose"); // importando el componente o libreria de mongoose
// aqui esta el modelo de datos para los elementos de la colección animals.js
const animalSchema = mongoose.Schema({ //esquema usado para modelar los objetos de tipo animal
    nombre: {// llave llamada nombre
        type: String,   // defininimos el tipo de datos
        required: true, //definir si sera obligatorio o no añadir este dato (si es nulificable o no)
    },
    edad: {
        type: Number,
        required: true,
    },
    tipo: {
        type: String,
        required: true,
    },
    fecha: {
        type: Date,
        requiered: false,
    }
});
module.exports = mongoose.model("Animal", animalSchema);
