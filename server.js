const http = require("http");
const bodyParser = require("body-parser");

const express = require("express");

//local files
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

//helpers
const rootDir = require("./utils/path");

const path = require("path");

const app = express();
app.use(express.static('public'));


app.use(bodyParser.urlencoded({extended: true}));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next)=>{
    res.status(404).sendFile(path.join(__dirname, "views", "404-error.html"));
})


app.listen(3001, ()=>{
    console.log("working...")
});