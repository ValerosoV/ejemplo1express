const mongoose = require("mongoose"); // importando el componente mongoose
const bcrypt = require("bcrypt"); // importando el componente bcrypt
const userSchema = mongoose.Schema({
    usuario: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    clave: {
        type: String,
        required: true
    }
});
userSchema.methods.encryptClave = async (clave) => {//async implica que habra un await
    const salt = await bcrypt.genSalt(10);          //constante salt = perese metodo_encriptado.repetido(10 veces)
    return bcrypt.hash(clave, salt);                //devuelva encriptado.hash(clave_del_usuario), la cadena de encripatado             
}
module.exports = mongoose.model('User', userSchema);
