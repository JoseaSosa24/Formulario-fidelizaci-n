import dataBase from "../database/dataBase.js";
import { DataTypes } from "sequelize";

const TipoIdentificacion = dataBase.define('tipos_identificaciones', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(60),
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

 
 TipoIdentificacion.sync({ force: false }); 

export { TipoIdentificacion }