const database = require("./database/db.js");
const saveOrphanage = require("./database/saveOrphanage.js");

module.exports = {
  index(req, res) {
    return res.render("index");
  },

  async orphanage(req, res) {
    const id = req.query.id;
    try {
      const db = await database;
      const data = await db.all(`SELECT * FROM orphanages WHERE id = "${id}"`);
      const orphanage = data[0];

      orphanage.images = orphanage.images.split(","); // transform in array
      orphanage.firstImage = orphanage.images[0]; // get first image
      orphanage.images = orphanage.images.slice(1); // remove first image from original array

      orphanage.open_on_weekends =
        orphanage.open_on_weekends == "0" ? false : true;

      console.log(orphanage);

      return res.render("orphanage", { orphanage });
    } catch (error) {
      console.log(error);
      return res.send("error not find id");
    }
  },

  async orphanages(req, res) {
    // pass orphanage object from database
    try {
      const db = await database;
      const orphanages = await db.all("SELECT * FROM orphanages");
      return res.render("orphanages", { orphanages });
    } catch (error) {
      console.log(error);
      return res.send("Error in database");
    }
  },

  create_orphanage(req, res) {
    return res.render("create-orphanage");
  },

  async save_orphanage(req, res) {
    const fields = req.body;
    // check fields filled
    if (Object.values(fields).includes("")) {
      return res.send(`Preencha todos os campos`);
    }

    try {
      // save orphanage
      const db = await database;
      saveOrphanage(db, {
        lat: fields.lat,
        lng: fields.lng,
        name: fields.name,
        about: fields.about,
        whatsapp: fields.whatsapp,
        images: fields.images.toString(), // saving like string type
        instructions: fields.instructions,
        openings_hours: fields.openings_hours,
        open_on_weekends: fields.open_on_weekends,
      });

      // redirect flow page
      return res.redirect("/orphanages");
    } catch (error) {
      console.log(error);
      res.send("Error in save data");
    }
  },
};
