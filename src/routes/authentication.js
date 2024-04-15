const express = require("express");
const router = express.Router(); //manejador de rutas de express
const userSchema = require("../models/user");

const bcrypt = require("bcrypt"); //llamado para des-encriptar

router.post('/signup', async (req, res) => {
    const { usuario, correo, clave } = req.body;
    const user = new userSchema({
        usuario: usuario,
        correo: correo,
        clave: clave
    });
    user.clave = await user.encryptClave(user.clave);
    await user.save(); //save es un método de mongoose para guardar datos en MongoDB 
    //res.json(user);
    res.json({
            message : "Usuario Agregado",
            user
    })

});
module.exports = router;
