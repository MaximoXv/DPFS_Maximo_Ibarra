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
  .withMessage("El nombre debe tener al menos 4 caracteres"),
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

const createProductValidator = [
  check("name").notEmpty().withMessage("Debe ingresar nombre del producto")
  .bail()
  .isLength({min: 5})
  .withMessage("El nombre debe tener al menos 5 caracteres"),
  check("branch_id").notEmpty().withMessage("Debe seleccionar una marca")
  .bail()
  .custom(async value => {
    const existingBranch = await db.Branch.findByPk(value);
    if (!existingBranch) {
      throw new Error('No existe la marca que seleccionó');
    }
  }),
  check("model")
  .notEmpty()
  .withMessage("Debe ingresar el modelo del producto")
  .bail()
  .isLength({min: 6})
  .withMessage("El modelo debe tener al menos 6 caracteres"),
  check("description").notEmpty().withMessage("Debe ingresar la descripción del producto")
  .bail()
  .isLength({min: 20})
  .withMessage("La descripción debe tener al menos 20 caracteres"),
  check("price")
  .notEmpty()
  .withMessage("Debe ingresar el precio del producto")
  .bail()
  .isLength({min: 5})
  .withMessage("El precio debe tener al menos 5 numeros"),
  check("stock")
  .notEmpty()
  .withMessage("Debe ingresar el stock del producto")
  .bail()
  .isLength({min: 1})
  .withMessage("El stock debe tener al menos 1 numero"),
  check("season_id").notEmpty().withMessage("Debe seleccionar una temporada")
  .bail()
  .custom(async value => {
    const existingSeason = await db.Season.findByPk(value);
    if (!existingSeason) {
      throw new Error('No existe la temporada que seleccionó');
    }
  }),
  check("age_id").notEmpty().withMessage("Debe seleccionar una edad")
  .bail()
  .custom(async value => {
    const existingAge = await db.Age.findByPk(value);
    if (!existingAge) {
      throw new Error('No existe la edad que seleccionó');
    }
  }),
  check("genre_id").notEmpty().withMessage("Debe seleccionar un genero")
  .bail()
  .custom(async value => {
    const existingGenre = await db.Genre.findByPk(value);
    if (!existingGenre) {
      throw new Error('No existe el genero que seleccionó');
    }
  }),
  check("colors")
  .custom((colors) => {
    if (!colors) {
      throw new Error("Debe seleccionar al menos un color");
    }

    if (!Array.isArray(colors)) {
      colors = [colors];
    }

    if (colors.length < 1) {
      throw new Error("Debe seleccionar al menos un color");
    }

    return true;
  })
  .bail()
  .custom(async (colors) => {
    // Normalizamos de nuevo por si viene como string
    if (!Array.isArray(colors)) {
      colors = [colors];
    }

    const allColors = await db.Color.findAll();
    const colorIds = allColors.map(color => String(color.id)); // Convertimos a string para evitar problemas

    const invalidColors = colors.filter(color => !colorIds.includes(String(color)));
    if (invalidColors.length > 0) {
      throw new Error('Uno o más colores seleccionados no existen en la base de datos');
    }

    return true;
  }),
  check("sizes")
  .custom((sizes) => {
    if (!sizes) {
      throw new Error("Debe seleccionar al menos un talle");
    }

    if (!Array.isArray(sizes)) {
      sizes = [sizes];
    }

    if (sizes.length < 1) {
      throw new Error("Debe seleccionar al menos un talle");
    }

    return true;
  })
  .bail()
  .custom(async (sizes) => {
    if (!Array.isArray(sizes)) {
      sizes = [sizes];
    }

    const allSizes = await db.Size.findAll();
    const sizeIds = allSizes.map(size => String(size.id));

    const invalidSizes = sizes.filter(size => !sizeIds.includes(String(size)));
    if (invalidSizes.length > 0) {
      throw new Error('Uno o más talles seleccionados no existen en la base de datos');
    }

    return true;
  }),
  check("image")
  .custom((value, { req }) => {
    if (!req.file) {
      throw new Error("Debe subir un archivo");
    }
    const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp", "image/gif"];
    if (!allowedTypes.includes(req.file.mimetype)) {
      throw new Error("Debe subir un archivo JPG, JPEG, PNG, WEBP o GIF");
    }
    return true;
  }),
  check('visibility')
    .notEmpty().withMessage('Debe seleccionar la visibilidad')
    .isInt({ min: 0, max: 1 }).withMessage('La visibilidad debe ser oculto o público')
];

module.exports = { loginValidator, registerValidator, createProductValidator };