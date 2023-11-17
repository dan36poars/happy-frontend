const express = require("express");
const path = require("path");

// starting express lib
const server = express();

// routes
server
  .use(express.static("public")) // static pages like css, js, images
  .set("views", path.join(__dirname, "views")) // template engine setting
  .set("view engine", "hbs")
  .get("/", (request, response) => {
    console.log(__dirname);
    const city = request.query.city;
    return response.render("index", { city });
  });

// listen
server.listen(3000);
