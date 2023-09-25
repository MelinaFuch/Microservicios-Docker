const { ClientError } = require("../utils/errors");

module.exports = (req, res, next) => {
    const { name, rotation_period, orbital_period, diameter, climate, gravity, terrain, surface_water } = req.body;
    if (!name || !rotation_period || !orbital_period || !diameter || !climate || !gravity || !terrain || !surface_water) {
        throw new ClientError("Faltan datos de la película", 400)
    }
    return next();
}