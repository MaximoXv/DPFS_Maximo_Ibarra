let fs = require("fs");
let path = require("path");

const usersPath = path.join(__dirname, "..", "data", "users.json");

function userLogged(req, res, next) {
    if(req.session?.userLogged){
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;

        req.session?.userLogged.userType == "ADMIN" ? (res.locals.isAdmin = true) : null;
    }
    if(req.session?.userLogged && req.cookies?.email){
        let users = JSON.parse(fs.readFileSync(usersPath, "utf-8"));
        let userFound = users.find((user)=>user.email == req.cookies.email);
        if(userFound){
            delete userFound.password;
            req.session.userLogged = userFound;
            res.locals.isLogged = true;
            res.locals.userLogged = req.session.userLogged;
        req.session?.userLogged.userType == "ADMIN" ? (res.locals.isAdmin = true) : null;

        }
    }

    next();
}

module.exports = userLogged;