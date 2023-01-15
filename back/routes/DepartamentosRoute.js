import express from "express";
import {
crearDepartamento,
mostrarDepartamento,
mostrarDepartamentos,
editarDepartamento,
borrarDepartamento
} from "../controllers/DepartamentosController.js"

const departamentosRouter = express.Router();

departamentosRouter.post('/', crearDepartamento)
departamentosRouter.get('/', mostrarDepartamentos)
departamentosRouter.get('/:id', mostrarDepartamento)
departamentosRouter.put('/:id', editarDepartamento)
departamentosRouter.delete('/:id', borrarDepartamento)

export default departamentosRouter;