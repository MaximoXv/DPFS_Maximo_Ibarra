const bcyrpt = require("bcrypt");
let fs = require("fs");
let path = require("path");

const usersPath = path.join(__dirname, "..", "data", "users.json");
const usersControllers = {
  login: (req, res) => {
    res.render("users/login.ejs");
  },
  register: (req, res) => {
    res.render("users/register.ejs");
  },
  processRegister: (req, res) => {
    let users = JSON.parse(fs.readFileSync(usersPath, "utf-8"));

    passwordHash = bcyrpt.hashSync(req.body.password, 8);
    let newUser = {
      id: users[users.length -1].id + 1,
      name_surname: req.body.name_surname,
      direction: req.body.direction,
      phone_number: req.body.phone_number,
      email: req.body.email,
      password: passwordHash,
      profile_picture: req.file? req.file.filename : "userDefault.jpg",
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
