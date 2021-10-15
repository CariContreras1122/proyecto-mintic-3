import express from 'express';
const router = express.Router();

// importar el modelo usuario
import Usuario from '../models/users';
// Agregar una nota
router.post('/nuevo-usuario', async(req, res) => {
    const body = req.body;
    try {
        const usuarioDB = await Usuario.create(body);
        res.status(200).json(usuarioDB);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});

// Consulta usuario con id

router.get('/user/:id', async(req, res) => { 
    const _id = req.params.id; 
    try { 
        const usuarioDB = await Usuario.findOne({_id}); 
        res.json(usuarioDB); 
    } catch (error) { 
        return res.status(400).json({ mensaje: 'Ocurrio un error', eerror })
    } 
});

// Get con todos los usuarios 
router.get('/users', async(req, res) => { 
    try { 

        const usuarioDB = await Usuario.find(); 
        res.json(usuarioDB); 
    
    } catch (error) { 
        return res.status(400).json({ mensaje: 'Ocurrio un error', error }) 
    } 

});

// Delete eliminar un usuario
router.delete('/user/:id', async(req, res) => { 
    const _id = req.params.id; 
    try { 
        
        const usuarioDB = await Usuario.findByIdAndDelete({_id}); 
        if(!usuarioDB){ 
            return res.status(400).json({ mensaje: 'No se encontró el id indicado', error }) 
        } 
            res.json(usuarioDB); 
    } 
    catch (error) { 
            return res.status(400).json({ mensaje: 'Ocurrio un error', error }) 
    } 
});

// Put actualizar un usuario 
router.put('/user/:id', async(req, res) => { 
    const _id = req.params.id; 
    const body = req.body; 
    try { 
        const usuarioDB = await Usuario.findByIdAndUpdate(_id, body, {new: true}); 
        res.json(usuarioDB); 
    } catch (error) { 
        return res.status(400).json({ mensaje: 'Ocurrio un error', error }) 
    } 
});


// Exportamos la configuración de express app
module.exports = router;
