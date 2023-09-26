const store = require("../database");
const { ClientError } = require("../utils/errors");

module.exports = async (req, res) => {    
    const { model, id } = req.params;
    const existId = await store[model].getOne(id);
    if (existId) {
        const editId = await store[model].edit(id, req.body);
        res.status(200).json({message: "Editado con éxito"});
    } else {
        throw new ClientError("No existe el id", 404);
    }
}