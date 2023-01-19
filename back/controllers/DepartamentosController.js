import { Departamentos } from "../models/DepartamentosModel.js";
import { Sequelize } from "sequelize";

const crearDepartamento = async (req, res) => {
    try {
        await Departamentos.create(req.body);
        res.json(
            {
                message: "Departamento creado correctamente",
                estado: true
            });
    } catch (error) {
        res.json(
            {
                message: "El departamento no se pudo crear " + error,
                estado: false
            });
    }
}

const mostrarDepartamentos = async (req, res) => {
    try {
        const departamentos = await Departamentos.findAll();
        res.json(departamentos)
    } catch (error) {
        res.json(
            {
                message: "Los departamentos no se pudieron mostrar " + error
            });

    }
}

const mostrarDepartamentosPorPais = async (req, res) => {
    try {
        const { id:paisId } = req.params;
        const departamentos = await Departamentos.findAll({ where: { pais_id: paisId } });
        res.status(200).json(departamentos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al obtener los departamentos del país"+error });
    }
}

const mostrarDepartamento = async (req, res) => {
    try {
        const { Op } = Sequelize
        const departamentos = await Departamentos.findOne({
            where: {
                [Op.or]: [
                    { id: req.params.id },
                    { nombre: req.params.id },
                ]
            }
        });
        res.json(departamentos)

    } catch (error) {
        res.json({
            message: "El cliente no se puede mostrar " + error
        });
    }
}

const editarDepartamento = async (req, res) => {
    try {
        await Departamentos.update(req.body, {
            where: { id: req.params.id }
        });
        res.json({
            message: "El departamento se ha actualizado correctamente "
        });
    } catch (error) {
        res.json({
            message: "El departamento no se puede editar " + error
        });
    }
}

const borrarDepartamento = async (req, res) => {
    try {
        await Departamentos.destroy({
            where: { id: req.params.id }
        });
        res.json({
            message: "El departamento se borrado correctamente "
        });
    } catch (error) {
        res.json({
            message: "El departamento no se puede borrar " + error
        });
    }
}

export {
    crearDepartamento,
    mostrarDepartamentos,
    mostrarDepartamento,
    editarDepartamento,
    borrarDepartamento,
    mostrarDepartamentosPorPais
}