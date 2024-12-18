const express = require("express");
const path = require("path");

const app = express();

const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname, "views" ,"home.html"));
})

app.get("/login",(req,res)=>{
    res.sendFile(path.join(__dirname, "views" ,"login.html"));

})

app.get("/register",(req,res)=>{
    res.sendFile(path.join(__dirname, "views" ,"register.html"));

})

app.get("/carrito",(req,res)=>{
    res.sendFile(path.join(__dirname, "views" ,"carrito.html"));
})

app.get("/product",(req,res)=>{
    res.sendFile(path.join(__dirname, "views" ,"productDetail.html"));
})
app.listen(port, ()=>{
    console.log(`Servidor corriendo en el puerto ${port}`)
});