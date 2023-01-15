import { Clientes } from "../models/ClientesModel.js";
import { Sequelize } from "sequelize";

const crearCliente = async (req, res) => {
    try {
        await Clientes.create(req.body);
        res.json({
            message: "Cliente creado correctamente",
            estado: true
        })

    } catch (error) {
        res.json({
            message: "El cliente no se pudo crear " + error,
            estado: false
        });
    }

}

const mostrarClientes = async (req, res) => {
    try {
        const clientes = await Clientes.findAll();
        res.json(clientes)

    } catch (error) {
        res.json({
            message: "El cliente no se pudo crear " + error
        });

    }

}


const mostrarCliente = async (req, res) => {
    try {
        const { Op }= Sequelize
        const cliente = await Clientes.findOne({
            where: {
                [Op.or]: [
                {id: req.params.id},
                {numero_identificacion: req.params.id},
                ]
            }
        });
        res.json(cliente)

    } catch (error) {
        res.json({
            message: "El cliente no se puede mostrar " + error
        });
    }
}

const editarCliente = async (req, res) => {

    try {
        const { Op }= Sequelize
        await Clientes.update(req.body, {
            where: {
                [Op.or]: [
                {id: req.params.id},
                {numero_identificacion: req.params.id},
                ]
            }
        });
        res.json({
            message: "El cliente se ha actualizado correctamente "
        });

    } catch (error) {
        res.json({
            message: "El cliente no se puede editar " + error
        });
    }



}

const borrarCliente = async (req, res) => {
    try {

        await Clientes.destroy({
            where: { id: req.params.id }
        });
        res.json({
            message: "El cliente se borrado correctamente "
        });

    } catch (error) {
        res.json({
            message: "El cliente no se puede borrar " + error
        });

    }

}

export { crearCliente, mostrarCliente, mostrarClientes, editarCliente, borrarCliente }