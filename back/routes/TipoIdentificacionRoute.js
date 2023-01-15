import express from "express";
import {
crearTipoIdentificacion,
mostrarTipoIdentificacion,
mostrarTiposIdentificacion,
editarTipoIdentificacion,
borrarTipoIdentificacion
} from "../controllers/TipoIdentificicacionController.js"

const tiposIdentificacionRouter = express.Router();

tiposIdentificacionRouter.post('/', crearTipoIdentificacion)
tiposIdentificacionRouter.get('/', mostrarTiposIdentificacion)
tiposIdentificacionRouter.get('/:id', mostrarTipoIdentificacion)
tiposIdentificacionRouter.put('/:id', editarTipoIdentificacion)
tiposIdentificacionRouter.delete('/:id', borrarTipoIdentificacion)

export default tiposIdentificacionRouter;