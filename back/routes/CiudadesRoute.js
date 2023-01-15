import express from "express";
import {
    crearCiudad,
    mostrarCiudad,
    mostrarCiudades,
    editarCiudad,
    borrarCiudad
} from "../controllers/CiudadesController.js"

const ciudadesRouter = express.Router();

ciudadesRouter.post('/', crearCiudad)
ciudadesRouter.get('/', mostrarCiudades)
ciudadesRouter.get('/:id', mostrarCiudad)
ciudadesRouter.put('/:id', editarCiudad)
ciudadesRouter.delete('/:id', borrarCiudad)

export default ciudadesRouter;
