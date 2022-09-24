const nodemailer = require("nodemailer");
const template = require("./template");

const createTrans = () => {
  const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "juansalazaraguirre0809@gmail.com",
      pass: "yglseaqjoycvmlgd",
    },
  });

  return transport;
};

const sendMail = async (user) => {
  const transporter = createTrans();
  const info = await transporter.sendMail({
    from: '"Marca" <marca@example.com>', // sender address
    to: `${user.email}`, // list of receivers
    subject: `Hola, ${user.name}, Bienvenido a Marca`, // Subject line
    text: "Hello world?", // plain text body
    html: template, // html body
  });

  console.log("Message sent: %s", info.messageId);

  return;
};

exports.sendMail = (user) => sendMail(user);
