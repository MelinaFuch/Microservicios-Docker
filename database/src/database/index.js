const mongoose = require("mongoose");
require("dotenv").config();

const conn = mongoose.createConnection(process.env.URI_MONGO);

module.exports = { 
    Character: conn.model("Character", require("./schemas/characterSchema")),
    Film: conn.model("Film", require("./schemas/filmSchema")),
    Planet: conn.model("Planet", require("./schemas/planetSchema"))
 }