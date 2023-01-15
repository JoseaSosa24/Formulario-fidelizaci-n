import { Marcas } from "../models/MarcasModel.js";
import { Sequelize } from "sequelize";

const crearMarca = async (req, res) => {
    try {
        await Marcas.create(req.body);
        res.json({
            message: "Marca creada correctamente",
            estado: true
        })

    } catch (error) {
        res.json({
            message: "La marca no se pudo crear " + error,
            estado: false
        });
    }
}

const mostrarMarcas = async (req, res) => {
    try {
        const marcas = await Marcas.findAll();
        res.json(marcas)
    } catch (error) {
        res.json({
            message: "La marca no se pudo crear " + error
        });

    }
}

const mostrarMarca = async (req, res) => {
    try {
        const marca = await Marcas.findOne({
            where: { id: req.params.id }
        });
        res.json(marca)
    } catch (error) {
        res.json({
            message: "La marca no se puede mostrar " + error
        });
    }
}

const editarMarca = async (req, res) => {
    try {
        const { Op } = Sequelize
        await Marcas.update(req.body, {
            where: {
                [Op.or]: [
                    { id: req.params.id },
                    { nombre: req.params.id },
                ]
            }
        });
        res.json({
            message: "La marca se ha actualizado correctamente "
        });

    } catch (error) {
        res.json({
            message: "La marca no se puede editar " + error
        });
    }
}

const borrarMarca = async (req, res) => {
    try {
        const { Op } = Sequelize
        await Marcas.destroy({
            where: {
                [Op.or]: [
                    { id: req.params.id },
                    { nombre: req.params.id },
                ]
            }
        });
        res.json({
            message: "La marca se borró correctamente "
        });
    } catch (error) {
        res.json({
            message: "La marca no se pudo borrar " + error
        });
    }
}

export { crearMarca, mostrarMarca, mostrarMarcas, editarMarca, borrarMarca }
