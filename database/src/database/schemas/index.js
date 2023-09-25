const conn = require("../index");

const Character = conn.model("Character", require("./schemas/characterSchema"));
const Film = conn.model("Film", require("./schemas/filmSchema"));
const Planet = conn.model("Planet", require("./schemas/planetSchema"));

module.exports = {
    Character,
    Film,
    Planet
}