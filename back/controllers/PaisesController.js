import { Paises } from "../models/PaisesModel.js";
import { Sequelize } from "sequelize";

const crearPais = async (req, res) => {
    try {
        await Paises.create(req.body);
        res.json({
            message: "País creado correctamente",
            estado: true
        })
    } catch (error) {
        res.json({
            message: "El país no se pudo crear " + error,
            estado: false
        });
    }
}

const mostrarPaises = async (req, res) => {
    try {
        const paises = await Paises.findAll();
        res.json(paises)
    } catch (error) {
        res.json({
            message: "El pais no se pudo crear " + error
        });

    }
}

const mostrarPais = async (req, res) => {
    try {
        const { Op } = Sequelize
        const pais = await Paises.findOne({
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
            message: "El pais no se puede mostrar " + error
        });
    }
}

const editarPais = async (req, res) => {
    try {
        const { Op } = Sequelize
        await Paises.update(req.body, {
            where: {
                [Op.or]: [
                    { id: req.params.id },
                    { nombre: req.params.id },
                ]
            }
        });
        res.json({
            message: "El pais se ha actualizado correctamente "
        });

    } catch (error) {
        res.json({
            message: "El pais no se puede editar " + error
        });
    }
}

const borrarPais = async (req, res) => {
    try {
        const { Op } = Sequelize
        await Paises.destroy({
            where: {
                [Op.or]: [
                    { id: req.params.id },
                    { nombre: req.params.id },
                ]
            }
        });
        res.json({
            message: "El pais se borró correctamente "
        });
    } catch (error) {
        res.json({
            message: "El pais no se pudo borrar " + error
        });
    }
}


export {
    crearPais,
    mostrarPais,
    mostrarPaises,
    editarPais,
    borrarPais
}