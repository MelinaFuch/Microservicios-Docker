const { ClientError } = require("../utils/errors");

module.exports = (req, res, next) => {
    const { name, height, mass, hair_color, skin_color, eye_color, birth_year, gender } = req.body;
    if (!name || !height || !mass || !hair_color || !skin_color || !eye_color || !birth_year || !gender) {
        throw new ClientError("Faltan datos de la película", 400)
    }
    return next();
}