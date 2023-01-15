import dataBase from "../database/dataBase.js";
import { DataTypes } from "sequelize";
import fs from 'fs';
import path from "path"
import  join  from 'path';



/* const fs = fs;
const path = path */

/* const ciudadesPath = path.join(__dirname, '../json/ciudades.json');
const ciudadesJSON = JSON.parse(fs.readFileSync(ciudadesPath, 'utf-8')); */


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
        allowNull: false,
        references: {
            model: 'departamentos',
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



/* ciudades.forEach(ciudad => Ciudades.findOrCreate(
    {
        where: { id: ciudad.id }, defaults: ciudad
    }
));  */
Ciudades.bulkCreate(ciudadesJSON, { ignoreDuplicates: true }).then(() => {
    console.log('Datos insertados correctamente');
}).catch((error) => {
    console.log(error);
})

Ciudades.sync({ force: false });

export {
    Ciudades
}
