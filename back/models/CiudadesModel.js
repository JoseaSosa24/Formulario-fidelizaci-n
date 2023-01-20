import dataBase from "../database/dataBase.js";
import { DataTypes } from "sequelize";


const Ciudades = dataBase.define('ciudades', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(70),
        allowNull: false,
    },
    departamento_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
    }
});

/* Ciudades.sync({ force: false }); */

export {
    Ciudades
}
