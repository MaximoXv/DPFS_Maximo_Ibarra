const bcyrpt = require("bcrypt");
let fs = require("fs");
let path = require("path");

const usersPath = path.join(__dirname, "..", "data", "users.json");
const usersControllers = {
  getLogin: (req, res) => {
    res.render("users/login.ejs");
  },
  getRegister: (req, res) => {
    res.render("users/register.ejs");
  },
  processRegister: (req, res) => {
    let users = JSON.parse(fs.readFileSync(usersPath, "utf-8"));

    passwordHash = bcyrpt.hashSync(req.body.password, 8);
    let newUser = {
      id: users.length + 1,
      name: req.body.name,
      lastName: req.body.lastName,
      email: req.body.email,
      password: passwordHash,
      userType: "USER",
    };

    users.push(newUser);
    fs.writeFileSync(usersPath, JSON.stringify(users, null, " "));

    console.log(req.body.password);
    console.log(passwordHash);
    res.redirect("/");
  },
};

module.exports = usersControllers;
