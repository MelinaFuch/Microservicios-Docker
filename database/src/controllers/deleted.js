const store = require("../database");
const { ClientError } = require("../utils/errors");

module.exports = async (req, res) => {    
    const { model, id } = req.params;
    const existId = await store[model].deleted(id);
    if (existId) {
        res.status(200).json({message: "Eliminado con éxito"});
    } else {
        throw new ClientError("No existe el id", 404);
    }
}