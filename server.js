const http = require("http");
const bodyParser = require("body-parser");
const productsControllers = require("./controllers/error404");

const express = require("express");

//local files/routes
const adminRoutes = require("./routes/admin");
const allProductsAdminRoutes = require("./routes/admin");

const shopRoutes = require("./routes/shop");

const app = express();
app.use(express.static('public'));

//templating
app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({extended: true}));

app.use("/admin", adminRoutes.routes);

app.use(shopRoutes);

app.use(productsControllers.getError404Page);


app.listen(3001, ()=>{
    console.log("working...")
});