import { Sequelize } from "sequelize";


const dataBase = new Sequelize('fidelizacion', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});


export default dataBase;