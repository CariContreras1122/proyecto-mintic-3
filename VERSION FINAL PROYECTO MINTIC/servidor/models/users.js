import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
 username: {type: String, required: [true, 'Nombre usuario']},
 password: String
});

// Convertir a modelo
const Usuario = mongoose.model('Users', usuarioSchema);
export default Usuario;