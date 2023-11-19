const express = require("express");
const path = require("path");
const pages = require("./pages.js");


// starting express lib
const server = express();

// routes
server
  .use(express.urlencoded({ extended: true}))
  .use(express.static("public")) // static pages like css, js, images
  .set("views", path.join(__dirname, "views")) // template engine setting
  .set("view engine", "hbs")
  .get("/", pages.index )
  .get("/orphanage", pages.orphanage )
  .get("/orphanages", pages.orphanages )
  .get("/create-orphanage", pages.create_orphanage )
  .post("/save-orphanage", pages.save_orphanage);

// listen
server.listen(3000);
