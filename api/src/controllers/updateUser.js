const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

//Actualizar perfil del Usuario
async function updateProfile(req, res) {
  const upid = req.params.id;
  const { name, phone, address } = req.body;

  try {
    let user = await User.findByIdAndUpdate({ _id: upid }, { name, phone, address });
    console.log(user);

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.GOOGLE_APP_EMAIL,
        pass: process.env.GOOGLE_APP_PASSWORD,
      },
    });

    const data = {
      from: '"Marca" <marca@example.com>', // sender address
      to: `${user.email}`, // list of receivers
      subject: `Hola, ${user.name}, Actualizacion de datos.`, // Subject line
      text: "Tu usuario ha sido actualizado sastifactoriamente.", // plain text body
      html: ``, // html body
    };

    user.save();
    transporter.sendMail(data);
    return res.status(200).json({ message: "Usuario Actualizado" });
  } catch (error) {
    return res.status(400).json({ error: "Error usuario no actualizado." });
  }
}

//Envio Restablecimiento de contraseña
async function emailVerification(req, res) {
  const email = req.body.email;

  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({ error: "Usuario con este Email no existe." });
    }

    const token = jwt.sign({ _id: user._id }, process.env.RESET_PASSWORD_KEY, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.GOOGLE_APP_EMAIL,
        pass: process.env.GOOGLE_APP_PASSWORD,
      },
    });

    const data = {
      from: '"Marca" <marca@example.com>', // sender address
      to: `${user.email}`, // list of receivers
      subject: `Hola, ${user.name}, Restablecer Contraseña`, // Subject line
      text: "Hello world?", // plain text body
      html: `http://localhost:3000/ForgotPassword/${token}`, // html body
    };

    return user.updateOne({ resetLink: token }, (err, user) => {
      if (err) {
        return res.status(400).json({ error: "Error contraseña no actualizada." });
      } else {
        transporter.sendMail(data, function (error, body) {
          if (error) {
            return res.status(400).json({ error: error.message });
          }
          res.status(200).json({ message: "Email ha sido enviado con exito." });
        });
      }
    });
  });
}

//Actualizar contraseña
async function updatePassword(req, res) {
  const { token, password } = req.body;

  if (token) {
    jwt.verify(token, process.env.RESET_PASSWORD_KEY, function (error, decodedData) {
      if (error) {
        return res.status(400).json({ error: "Token incorrecto o está caducado." });
      }
    });
  }

  try {
    const user = await User.findOne({ resetLink: token });

    user.password = bcrypt.hashSync(password, 10);

    await user.save();
    return res.status(200).json({ message: "Tu contraseña ha sido cambiada." });
  } catch (error) {
    return res.status(400).json({ error: "Error al Restablecer contraseña." });
  }
}

module.exports = { updateProfile, emailVerification, updatePassword };
