const { model, Schema } = require("mongoose");

//Aqui creamos los Item que tendran los datos en nuestra Collection de MongoDb
const UserSchema = new Schema({
  name: { type: String, required: true },
  lastname: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: Number, default: "" },
  address: { type: String, default: "" },
  resetLink: { data: String, default: "" },
});

module.exports = model("User", UserSchema);
