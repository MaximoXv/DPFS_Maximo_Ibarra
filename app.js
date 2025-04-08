const express = require("express");
const methodOverride = require("method-override")
const session = require("express-session");
const cookieParser = require("cookie-parser");
const userLogged = require("./middleware/userLogged");
const morgan = require("morgan");
const path = require("path");
const app = express();
const port = 3000;
const cors = require("cors");
const db = require("./database/models");

const indexRouter = require("./routes/index.routes");
const usersRouter = require("./routes/users.routes");
const productsRouter = require("./routes/products.routes");

//view engine
app.set("view engine", "ejs")

app.set("views", path.join(__dirname, "views"));


//middlewares
//para que nuestra app entienda lo que viene del formulario
app.use(morgan("tiny"));
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("__method"))
app.use(cookieParser());
app.use(session({
    secret: "secret",
    resave: true,
    saveUninitialized: true
}))
app.use(userLogged)

app.use("/",indexRouter)
app.use("/users",usersRouter)
app.use("/products",productsRouter)

app.use(function(req,res){
    res.status(404).render("not-found.ejs")
})


app.listen(port, async ()=>{

    await db.sequelize.sync({force: true});
    console.log(`Servidor corriendo en el puerto http://localhost:${port}`)
});
