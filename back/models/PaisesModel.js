import dataBase from "../database/dataBase.js";
import { DataTypes } from "sequelize";

const Paises = dataBase.define('paises', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(70),
        allowNull: false,
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


/* Paises.sync({ force: false }); */

export {
    Paises
}