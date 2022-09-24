const Router = require("express");
const Routers = Router();
const Controllers = require("../controllers/user");
const Update = require("../controllers/updateUser");
const { protect } = require("../controllers/authMiddleware");

Routers.get("/", (req, res) => {
  res.status(200).send("SERVIDOR CONECTADO");
});

Routers.post("/singup", Controllers.Register);

Routers.post("/login", Controllers.Login);

Routers.post("/emailVerification", Update.emailVerification);

Routers.put("/updated", Update.updatePassword);

Routers.get("/profile", protect, Controllers.Profile);

Routers.put("/updateProfile/:id", Update.updateProfile);

module.exports = Routers;
