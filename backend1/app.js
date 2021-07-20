const express = require("express")
const app = express();
const port = 3030;
const path = require("path");
const indexRouter = require("./routes/index")
const productosRouter = require("./routes/products")
app.use(express.static("public"))
app.use("/", indexRouter)
app.use("/products", productosRouter);




app.get("/login",(req,res)=> res.sendFile(path.join(__dirname,"views","login.html")))
app.get("/register",(req,res)=> res.sendFile(path.join(__dirname,"views","register.html")))


app.listen(port, () => console.log("server running in "+ port))