const app = require("./app");
const databaseConexion = require("./database/databaseConexion");

//Requerimiento para que nuestras variable de entorno funcionenen:
const path = require("path");
const dotenv = require("dotenv");
dotenv.config({ path: path.join(__dirname, "./config.env") });

app.listen(process.env.PORT, () => {
  console.log(`SERVIDOR CONECTADO EN PUERTO ${process.env.PORT}`);
  databaseConexion();
});
