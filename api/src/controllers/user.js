const User = require("../models/user");
const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const emailer = require("../config/emailer");

const path = require("path");
const dotenv = require("dotenv");
dotenv.config({ path: path.join(__dirname, "./config.env") });

//Registro de usuarios
async function Register(req, res) {
  const body = req.body;
  const { name, email, password } = body;

  const user = new User({
    name,
    email,
    password: bcrypt.hashSync(password, 10),
  });

  const isEmailExist = await User.findOne({ email: req.body.email });

  if (isEmailExist) {
    return res.status(400).json({ error: "EMAIL SE ENCUENTRA EN USO" });
  }

  emailer.sendMail(user);
  user.save().then(() => console.log("USUARIO CREADO"));
  res.status(200).send("USUARIO CREADO");
}

//Autenticación de los Usuarios en nuestra APP
async function Login(req, res) {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({ data: "USER LOGGED IN SUCCESFULLY", token: geretateToken(user._id), id: user._id });
  } else {
    res.status(401).json({
      ok: false,
      error: {
        message: "INVALID CREDENTIALS",
      },
    });
  }
}

//Generar JWT
const geretateToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_KEY, {
    expiresIn: "1h",
  });
};

//Obtener perfil del usuario
const Profile = asyncHandler(async (req, res) => {
  const { _id, name, email, address, phone } = await User.findById(req.user.id);

  res.status(200).json({
    id: _id,
    name,
    email,
    address,
    phone,
  });
});

module.exports = { Register, Login, Profile };
