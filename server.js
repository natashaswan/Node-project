const http = require("http");
const bodyParser = require("body-parser");

const express = require("express");


//local files
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const path = require("path");

const app = express();
app.use(express.static('public'));
//instaling pug

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({extended: true}));

app.use("/admin", adminRoutes.routes);
app.use(shopRoutes);

app.use((req, res, next)=>{
    res.status(404).sendFile(path.join(__dirname, "views", "404-error.html"));
})


app.listen(3001, ()=>{
    console.log("working...")
});