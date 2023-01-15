import express from "express";
import {
    crearCliente,
    mostrarCliente,
    mostrarClientes,
    editarCliente,
    borrarCliente
} from "../controllers/ClientesController.js"

const clientesRouter = express.Router();

clientesRouter.post('/', crearCliente)
clientesRouter.get('/', mostrarClientes)
clientesRouter.get('/:id', mostrarCliente)
clientesRouter.put('/:id', editarCliente)
clientesRouter.delete('/:id', borrarCliente)

export default clientesRouter;

