const store = require("../database");
const { ClientError } = require("../utils/errors");

module.exports = async (req, res) => {    
    const { model, id } = req.params;
    const data = await store[model].getOne(id)
    if (data) {
        res.status(200).json(data);
    } else {
        throw new ClientError("No existe el id", 404);
    }
}