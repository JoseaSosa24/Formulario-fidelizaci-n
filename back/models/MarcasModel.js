import dataBase from "../database/dataBase.js";
import { DataTypes } from "sequelize";

const Marcas = dataBase.define('marcas', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(50),
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

Marcas.sync({ force: false });

export {
    Marcas
}
