const usersControllers = {
    getLogin: (req,res)=>{
        res.render("users/login.ejs");
    },
    getRegister: (req,res)=>{
        res.render("users/register.ejs");
    }
};

module.exports = usersControllers