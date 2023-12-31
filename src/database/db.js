const db = require("sqlite-async");

function execute(database) {
  return database.exec(`
        CREATE TABLE IF NOT EXISTS orphanages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            lat TEXT,
            lng TEXT,
            name TEXT,
            about TEXT,
            whatsapp TEXT,
            images TEXT,
            instructions TEXT,
            opening_hours TEXT,
            open_on_weekends TEXT
        );
    `);
}


module.exports = db.open(__dirname + "/database.sqlite").then(execute); // load primary sqlite database and then go to execute function