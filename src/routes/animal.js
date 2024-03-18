const express = require("express");
const router = express.Router(); //manejador de rutas de express
const animalSchema = require("../models/animals");
//Nuevo animal
router.post("/animals", (req, res) => {
    const animal = animalSchema(req.body);
    animal
        .save()
        .then((data) => res.json(data))                 //try 
        .catch((error) => res.json({ message: error }));//catcg de java
});
module.exports = router; //no olvidar esta vaina
