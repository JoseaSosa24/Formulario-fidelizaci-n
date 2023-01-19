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



/* ciudades.forEach(ciudad => Ciudades.findOrCreate(
    {
        where: { id: ciudad.id }, defaults: ciudad
    }
));  */
/* Ciudades.bulkCreate(ciudadesJSON, { ignoreDuplicates: true }).then(() => {
    console.log('Datos insertados correctamente');
}).catch((error) => {
    console.log(error);
}) */

Ciudades.sync({ force: false });

export {
    Ciudades
}
