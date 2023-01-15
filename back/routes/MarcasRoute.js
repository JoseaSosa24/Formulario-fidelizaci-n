import express from "express";
import {
crearMarca,
mostrarMarca,
mostrarMarcas,
editarMarca,
borrarMarca
} from "../controllers/MarcasController.js"

const marcasRouter = express.Router();

marcasRouter.post('/', crearMarca)
marcasRouter.get('/', mostrarMarcas)
marcasRouter.get('/:id', mostrarMarca)
marcasRouter.put('/:id', editarMarca)
marcasRouter.delete('/:id', borrarMarca)

export default marcasRouter;