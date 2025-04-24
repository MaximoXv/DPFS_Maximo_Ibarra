const { check } = require("express-validator");
const db = require("../database/models");

const loginValidator = [
  check("email")
    .notEmpty()
    .withMessage("Debes ingresar un email")
    .bail()
    .isEmail()
    .withMessage("El dato ingresado no corresponde a un email"),
  check("password")
    .notEmpty()
    .withMessage("Debes ingresar un password")
    .bail()
    .isLength({ min: 8 })
    .withMessage("La contraseña debe tener almenos 8 caracteres"),
];

const registerValidator = [
  check("fullname").notEmpty().withMessage("Debe ingresar su nombre completo")
  .bail()
  .isLength({min: 4})
  .withMessage("El nombre debe tener al menos 4"),
  check("direction").notEmpty().withMessage("Debe ingresar su dirección"),
  check("phonenumber")
  .notEmpty()
  .withMessage("Debe ingresar su numero de telefono")
  .bail()
  .isNumeric()
  .withMessage("Debe ingresar solo numeros")
  .bail()
  .isLength({min: 10})
  .withMessage("El telefono debe tener al menos 10 numeros"),
  check("email")
    .notEmpty()
    .withMessage("Debe ingresar un email")
    .bail()
    .isEmail()
    .withMessage("El dato ingresado no corresponde a un email")
    .bail()
    .custom(async value => {
      const existingUser = await db.User.findOne({ where: { email: value} });
      if (existingUser) {
        throw new Error('Ya existe un usuario con esta direccion de email');
      }
    }),
  check("password").notEmpty()
  .withMessage("Debes ingresar un password")
  .bail()
  .isLength({ min: 8 })
  .withMessage("La contraseña debe tener almenos 8 caracteres"),
  check("confirmPassword").notEmpty().withMessage("Este campo no puede estar vacio")
  .bail()
  .custom((value, { req }) => {
    return value === req.body.password;
  })
  .withMessage("La contraseña debe coincidir"),
  check("terminosCondiciones")
  .equals("on")
  .withMessage("Debes aceptar los términos y condiciones"),
  check("profile_picture")
  .custom((value, { req }) => {
    if (!req.file) {
      throw new Error("Debe subir un archivo");
    }

    const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp", "image/gif"];
    if (!allowedTypes.includes(req.file.mimetype)) {
      throw new Error("Debe subir un archivo JPG, JPEG, PNG, WEBP o GIF");
    }

    return true;
  })

];

module.exports = { loginValidator, registerValidator };