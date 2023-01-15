import express from "express";
import dataBase from "./database/dataBase.js";
import cors from 'cors'
import ciudadesRouter from "./routes/CiudadesRoute.js";
import clientesRouter from "./routes/ClientesRoute.js";
import departamentosRouter from "./routes/DepartamentosRoute.js";
import marcasRouter from "./routes/MarcasRoute.js";
import paisesRouter from "./routes/PaisesRoute.js";
import tiposIdentificacionRouter from "./routes/TipoIdentificacionRoute.js";

const app = express();
const port = 3100;

try {
    await dataBase.authenticate();
    console.log("Se conectó a la base de datos correctamente");
    
} catch (error) {
    console.log("Conexión no exitosa "+error);
    
}

app.use(cors());
app.use(express.json());
app.use('/ciudades', ciudadesRouter) // ruta ciudades
app.use('/clientes', clientesRouter) //ruta clientes
app.use('/departamentos', departamentosRouter)
app.use('/marcas', marcasRouter)
app.use('/paises', paisesRouter)
app.use('/tiposidentificaciones', tiposIdentificacionRouter)

app.listen(port, () => {
    console.log("Servidor corriendo en el puerto " + port);
    console.log(`http://localhost:${port}`);
}); 