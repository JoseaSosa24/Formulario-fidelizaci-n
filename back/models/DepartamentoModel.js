import dataBase from "../database/dataBase.js";
import { DataTypes } from "sequelize";

const Departamentos = dataBase.define('departamentos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    pais_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'paises',
            key: 'id'
        }
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

Departamentos.sync({ force: false });

export {
    Departamentos
}
