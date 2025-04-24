const bcyrpt = require("bcrypt");
const { validationResult } = require("express-validator");
const db = require("../database/models");

const usersControllers = {
  login: (req, res) => {
    res.render("users/login.ejs");
  },
  processLogin: async (req, res) => {
    try {
      const resultValidation = validationResult(req);

      if (resultValidation.isEmpty()) {
        let userFound = await db.User.findOne({
          where: {
            email: req.body.email,
          },
        });

        if (userFound) {
          let passwordOk = bcyrpt.compareSync(
            req.body.password,
            userFound.password
          );
          if (passwordOk) {
            delete userFound.password;
            req.session.userLogged = userFound;
            if (req.body.remember_me == "on") {
              res.cookie("email", userFound.email, {
                maxAge: 1000 * 60 * 5,
              });
            }
            return res.redirect("/");
          }

          return res.render("users/login.ejs", {
            errors: {
              email: {
                msg: "Credenciales inválidas"
              },
              password: {
                msg: "Credenciales inválidas",
              },
            },
            old: req.body,
          });
        } else {
          return res.render("users/login.ejs", {
            errors: {
              password: {
                msg: "Credenciales inválidas",
              },
              old: req.body,
            },
          });
        }
      } else {
        return res.render("users/login.ejs", {
          errors: resultValidation.mapped(),
          old: req.body,
        });
      }
    } catch (error) {
      console.log(error);
    }
  },
  register: (req, res) => {
    res.render("users/register.ejs");
  },
  processRegister: async (req, res) => {
    try {
      const resultValidation = validationResult(req);
      if(resultValidation.isEmpty()){

      

      const passwordHash = bcyrpt.hashSync(req.body.password, 8);

      const newUser = await db.User.create({
        fullname: req.body.fullname,
        direction: req.body.direction,
        phonenumber: req.body.phonenumber,
        email: req.body.email,
        password: passwordHash,
        avatar: req.file ? req.file.filename : "userDefault.jpg",
        role_id: 1,
      });

      const userSession = {
        id: newUser.id,
        fullname: newUser.fullname,
        email: newUser.email,
        avatar: newUser.avatar,
        role_id: newUser.role_id,
      };

      req.session.userLogged = userSession;
      console.log(req.body.password);
      console.log(passwordHash);
      res.redirect("/");

    }else{
      return res.render("users/register", {
        errors: resultValidation.mapped(),
        old: req.body,
      });
    }

    } catch (error) {
      console.log(error);
    }
  },
  logout: (req, res) => {
    res.clearCookie("email");
    req.session.destroy();
    res.redirect("/");
  },
};

module.exports = usersControllers;
