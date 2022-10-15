const router = require("express").Router();

const { check } = require("express-validator");

const usersControllers = require("./controller/users.controller");

router.post(
  "/auth/register",
  [
    check("username", "El nombre de usuario es obligatorio").not().isEmpty(),
    check("password", "El password es obligatorio").not().isEmpty(),
    check("passwordVerification", "El password es obligatorio").not().isEmpty(),
    check("email", "El email indicado no tiene formato de mail").isEmail(),
  ],
  usersControllers.handlingRegister
);

router.post("/auth/login", usersControllers.handlingLogin);

// configuración token y expiración sesión/token

module.exports = router;
