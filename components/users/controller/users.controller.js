const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const { User } = require("../../../database/database");
const moment = require("moment");
const jwt = require("jwt-simple");
const nodemailer = require("nodemailer");

async function handlingRegister(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errores: errors.array() });
  }

  let userNameExist = await User.findOne({
    where: { username: req.body.username },
  });
  let userEmailExist = await User.findOne({ where: { email: req.body.email } });

  if (req.body.password !== req.body.passwordVerification) {
    {
      res.status(400).json({ error: "Tus contraseñas no coinciden" });
    }
  } else {
    if (userNameExist || userEmailExist) {
      if (userNameExist) {
        res.status(400).json({ error: "Nombre de usuario ya existe" });
      } else {
        res.status(400).json({ error: "Email ya existe" });
      }
    } else {
      req.body.password = bcrypt.hashSync(req.body.password, 10);
      const user = await User.create(req.body);
      const userActual = await User.findOne({
        where: { id: user.dataValues.id },
      });
      let userMail = `"${user.dataValues.email}"`;
      let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: "agustinff90@gmail.com",
          pass: "kvairbswotropwvc",
        },
      });

      let mailOptions = {
        from: "remitente",
        to: userMail,
        subject: "Proyecto Alkemy",
        html: `<div>
                    <h2>Registro Completado! Bienvenidos!</h2>
                    <table cellspacing="0">
                    <tbody><tr>
                    <th>Tus Datos:</th>
                    </tr>
                    <tr>
                    <th>Nombre:</th>
                    <td>
                    ${JSON.stringify(userActual.dataValues.username)}
                    </td>
                    </tr>
                    <tr>
                    <th>Fecha</th>
                    <td>
                    ${JSON.stringify(userActual.dataValues.updatedAt)}
                    </td>
                    </tr>`,
      };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          res.status(500).send(error);
        }
      });

      res.status(200).json(userActual);
    }
  }
}

async function handlingLogin(req, res) {
  const user = await User.findOne({ where: { email: req.body.email } });
  if (user) {
    const igual = bcrypt.compareSync(req.body.password, user.password);
    if (igual) {
      res.status(200).json({ success: createToken(user) });
    } else {
      res.status(400).json({ error: "Error en usuaruo y/o password" });
    }
  } else {
    res.status(400).json({ error: "Error en usuaruo y/o password" });
  }
}
const createToken = (user) => {
  const payload = {
    usuarioId: user.id,
    createdAt: moment().unix(),
    expiredAt: moment().add(process.env.SESSION_DURATION, "minutes").unix(),
  };
  return jwt.encode(payload, process.env.TOKEN_PHRASE);
};
module.exports = {
  handlingRegister,
  handlingLogin,
};
