import dataBase from "../database/dataBase.js";
import { DataTypes } from "sequelize";

const TipoIdentificacion = dataBase.define('tipo_identificacion', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }
});

TipoIdentificacion.sync({ force: false });

export { TipoIdentificacion }