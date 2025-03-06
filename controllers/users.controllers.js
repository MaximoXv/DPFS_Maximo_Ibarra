const bcyrpt = require("bcrypt");
let fs = require("fs");
let path = require("path");

const usersPath = path.join(__dirname, "..", "data", "users.json");
const usersControllers = {
  login: (req, res) => {
    res.render("users/login.ejs");
  },
  processLogin: (req, res) =>{
    let users = JSON.parse(fs.readFileSync(usersPath, "utf-8"));
    const userFound = users.find((user)=>user.email == req.body.email);
    if(userFound){
      let passwordOk = bcyrpt.compareSync(req.body.password, userFound.password);
      if(passwordOk){
        delete userFound.password;
        req.session.userLogged = userFound;
        if(req.body.remember_me == "on"){
          res.cookie("email", userFound.email, {
            maxAge: 1000 * 60 *5
          });
        }
        res.redirect("/");
      }else{
        res.redirect("/users/login");
      }
    }else{
      res.redirect("/users/login");
    }
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

    delete newUser.password;
    req.session.userLogged = newUser;
    console.log(req.body.password);
    console.log(passwordHash);
    res.redirect("/");
  },
  logout: (req, res)=>{
    res.clearCookie("email");
    req.session.destroy();
    res.redirect("/")
  }
};

module.exports = usersControllers;
