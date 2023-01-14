import express from "express";
import dataBase from "./database/dataBase.js";
import cors from 'cors'

const app = express();
const port = 3100;

try {
    await dataBase.authenticate();
    console.log("Se conectó a la base de datos correctamente");
    console.log("Servidor corriendo en el puerto " + port);
    console.log(`http://localhost:${port}`);
    
} catch (error) {
    console.log("Conexión no exitosa "+error);
    
}

/* app.listen(port, () => {
    console.log("Servidor corriendo en el puerto " + port);
    console.log(`http://localhost:${port}`);
}); */