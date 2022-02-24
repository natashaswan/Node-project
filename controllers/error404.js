const path = require("path");

exports.getError404Page = (req, res, next)=>{
    res.status(404).render("404-error", {docTitle: "Page not found", path: path});
};