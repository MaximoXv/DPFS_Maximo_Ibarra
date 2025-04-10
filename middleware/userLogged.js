
const db = require("../database/models");

async function userLogged (req, res, next)  {
    if(req.session?.userLogged){
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;

        req.session?.userLogged.userType == 3 ? (res.locals.isAdmin = true) : null;
    }
    if(req.session?.userLogged && req.cookies?.email){

        let userFound = await db.User.findOne({
                where: {
                  email: req.cookies.email,
                },
              });
        if(userFound){
            delete userFound.password;
            req.session.userLogged = userFound;
            res.locals.isLogged = true;
            res.locals.userLogged = req.session.userLogged;
        req.session?.userLogged.userType == 3 ? (res.locals.isAdmin = true) : null;

        }
    }

    next();
}

module.exports = userLogged;