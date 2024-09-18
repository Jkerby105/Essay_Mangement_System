const bodyParser = require("body-parser");
const express = require("express")
const app = express();
const authRoutes = require('./routes/auth');

app.use(bodyParser.json());

app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

app.use("/auth",authRoutes)


app.use((error,req,res,next) => {
    console.log(error)
})


app.listen(3000);
