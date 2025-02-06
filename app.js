const express = require("express");
const methodOverride = require("method-override")
const path = require("path");
const app = express();
const port = 3000;

const indexRouter = require("./routes/index.routes");
const usersRouter = require("./routes/users.routes");
const productsRouter = require("./routes/products.routes");

//view engine
app.set("view engine", "ejs")

app.set("views", path.join(__dirname, "views"));


//middlewares
//para que nuestra app entienda lo que viene del formulario
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("__method"))


app.use("/",indexRouter)
app.use("/users",usersRouter)
app.use("/products",productsRouter)


app.listen(port, ()=>{
    console.log(`Servidor corriendo en el puerto http://localhost:${port}`)
});
