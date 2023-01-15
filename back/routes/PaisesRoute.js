import express from "express";
import {
crearPais,
mostrarPais,
mostrarPaises,
editarPais,
borrarPais
} from "../controllers/PaisesController.js"

const paisesRouter = express.Router();

paisesRouter.post('/', crearPais)
paisesRouter.get('/', mostrarPaises)
paisesRouter.get('/:id', mostrarPais)
paisesRouter.put('/:id', editarPais)
paisesRouter.delete('/:id', borrarPais)

export default paisesRouter;