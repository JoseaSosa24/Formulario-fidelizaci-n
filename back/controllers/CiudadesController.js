import { Ciudades } from "../models/CiudadesModel.js";
import { Sequelize } from "sequelize";

const crearCiudad = async (req, res) => {
    try {
        await Ciudades.create(req.body);
        res.json({
            message: "Ciudad creada correctamente",
            estado: true
        })
    } catch (error) {
        res.json({
            message: "La ciudad no se pudo crear " + error,
            estado: false
        });
    }
}

const mostrarCiudades = async (req, res) => {
    try {
        const ciudades = await Ciudades.findAll();
        res.json(ciudades)
    } catch (error) {
        res.json({
            message: "La ciudades no se puden mostrar " + error
        });

    }
}

const mostrarCiudad = async (req, res) => {
    try {
        const ciudad = await Ciudades.findOne({
            where: { id: req.params.id }
        });
        res.json(ciudad)

    } catch (error) {
        res.json({
            message: "La ciudad no se puede mostrar " + error
        });
    }
}


const editarCiudad = async (req, res) => {
    try {
        const { Op } = Sequelize
        await Ciudades.update(req.body, {
            where: {
                [Op.or]: [
                    { id: req.params.id },
                    { nombre: req.params.id },
                ]
            }
        });
        res.json({
            message: "La ciudad se ha actualizado correctamente "
        });

    } catch (error) {
        res.json({
            message: "La ciudad no se puede editar " + error
        });
    }
}

const borrarCiudad = async (req, res) => {
    try {
        await Ciudades.destroy({
            where: { id: req.params.id }
        });
        res.json({
            message: "La ciudad se borrado correctamente "
        });
    } catch (error) {
        res.json({
            message: "La ciudad no se puede borrar " + error
        });
    }
}

export { crearCiudad, mostrarCiudad, mostrarCiudades, editarCiudad, borrarCiudad }


