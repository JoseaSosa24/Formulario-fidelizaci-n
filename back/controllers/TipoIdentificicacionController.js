import { TipoIdentificacion } from "../models/TipoIdentificacionModel.js";
import { Sequelize } from "sequelize";

const crearTipoIdentificacion = async (req, res) => {
    try {
        await TipoIdentificacion.create(req.body);
        res.json({
            message: "Tipo De indentificación creado correctamente",
            estado: true
        })
    } catch (error) {
        res.json({
            message: "El Tipo De indentificación no se pudo crear " + error,
            estado: false
        });
    }
}

const mostrarTiposIdentificacion = async (req, res) => {
    try {
        const TiposIdentificacion = await TipoIdentificacion.findAll();
        res.json(TiposIdentificacion)
    } catch (error) {
        res.json({
            message: "El Tipo De indentificación no se pudo crear " + error
        });

    }
}

const mostrarTipoIdentificacion = async (req, res) => {
    try {
        const { Op } = Sequelize
        const pais = await TipoIdentificacion.findOne({
            where: {
                [Op.or]: [
                    { id: req.params.id },
                    { nombre: req.params.id },
                ]
            }
        });
        res.json(pais)
    } catch (error) {
        res.json({
            message: "El Tipo De indentificación no se puede mostrar " + error
        });
    }
}

const editarTipoIdentificacion = async (req, res) => {
    try {
        const { Op } = Sequelize
        await TipoIdentificacion.update(req.body, {
            where: {
                [Op.or]: [
                    { id: req.params.id },
                    { nombre: req.params.id },
                ]
            }
        });
        res.json({
            message: "El Tipo De indentificacións se ha actualizado correctamente "
        });

    } catch (error) {
        res.json({
            message: "El Tipo De indentificación no se puede editar " + error
        });
    }
}

const borrarTipoIdentificacion = async (req, res) => {
    try {
        const { Op } = Sequelize
        await TipoIdentificacion.destroy({
            where: {
                [Op.or]: [
                    { id: req.params.id },
                    { nombre: req.params.id },
                ]
            }
        });
        res.json({
            message: "El Tipo De indentificación se borró correctamente "
        });
    } catch (error) {
        res.json({
            message: "El Tipo De indentificación no se pudo borrar " + error
        });
    }
}


export {
    crearTipoIdentificacion,
    mostrarTipoIdentificacion,
    mostrarTiposIdentificacion,
    editarTipoIdentificacion,
    borrarTipoIdentificacion
}