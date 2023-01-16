import dataBase from "../database/dataBase.js";
import { DataTypes } from "sequelize";

const Clientes = dataBase.define('clientes', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tipo_identificacion_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'tipos_identificaciones',
            key: 'id'
        }
    },
    numero_identificacion: {
        type: DataTypes.STRING(11),
        allowNull: false,
    },
    nombres: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    apellidos: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    fecha_nacimiento: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    direccion: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    correo: {
        type: DataTypes.STRING(100),
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
    departamento_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'departamentos',
            key: 'id'
        }
    },
    ciudad_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'ciudades',
            key: 'id'
        }
    },
    marca_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'marcas',
            key: 'id'
        }
    },
    estado: {
        type: DataTypes.ENUM('ACTIVO', 'INACTIVO'),
        defaultValue: 'ACTIVO',
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

Clientes.sync({ force: false });

export {
    Clientes
}