const mongoose = require("mongoose");

//Requerimiento para que nuestras variable de entorno funcionenen:
const path = require("path");
const dotenv = require("dotenv");
dotenv.config({ path: path.join(__dirname, "./../config.env") });

//Conexion a nuestra base de datos en MongoDB
const MONGODB_URI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.3bkjgxc.mongodb.net/${process.env.MONGO_DBNAME}?retryWrites=true&w=majority`;

const databaseConexion = async () => {
  await mongoose
    .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("BASE DE DATOS CONECTADA A MONGODB"))
    .catch((e) => console.log("ERROR DE CONEXIÓN", e));
};

module.exports = databaseConexion;
