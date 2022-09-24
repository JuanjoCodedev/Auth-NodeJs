const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/user");

const path = require("path");
const dotenv = require("dotenv");
dotenv.config({ path: path.join(__dirname, "./config.env") });

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      //Obtener token de header
      token = req.headers.authorization.split(" ")[1];

      //Verificar token
      const decoded = jwt.verify(token, process.env.TOKEN_KEY);

      //Obtener token del usuario
      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      console.log(error);
      res.status(401).json({
        ok: false,
        error: {
          message: "NOT AUTHORIZED",
        },
      });
    }
  }
  //No existe token el usuario no tiene autorizacion.
  if (!token) {
    res.status(401).json({
      ok: false,
      error: {
        message: "NOT AUTHORIZED, NO TOKEN",
      },
    });
  }
});

module.exports = { protect };
