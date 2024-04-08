const express = require("express");  //llamado al framework

const router = express.Router(); //manejador de rutas de express

const animalSchema = require("../models/animals"); //llamado al esquema en los modelos

//Nuevo animal
router.post("/animals" /*ruta usada*/, (req, res)/*función dflecha*/ => {   //petición de post
    const animal /*crear una constante llamada animal*/ = /*definida por el esquema animal*/ animalSchema(req.body /*el esquema solicita el body del post*/);
    animal       /*usando la constante animal*/
        .save()                                         //guardamos un documentos/objetos en la base de datos
        .then((data) => res.json(data))                 //usando la variable data imprima la informacion de data en formato json
        .catch((error) => res.json({ message: error }));//si sale error, atrapelo 
});

router.get("/animals", (req, res) => {   //petición de get


    animalSchema
        .find()                                         //hallamos todos los documentos/objetos en la colección de la base de datos 
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Consultar un animal por su id
router.get("/animals/:id", (req, res) => {
    const { id } = req.params;
    animalSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Modificar el nombre de un animal por su id
router.put("/animals/:id", (req, res) => {
    const { id } = req.params;
    const { nombre, edad, tipo, fecha } = req.body;
    animalSchema
        .updateOne({ _id: id }, {
            $set: { nombre, edad, tipo, fecha }
        })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

router.delete("/animals/:id", (req, res) => {
    const { id } = req.params;
    animalSchema
        .findByIdAndDelete(id)
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.json({ message: error });
        });
});



module.exports = router; //no olvidar esta vaina
