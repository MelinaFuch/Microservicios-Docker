const data = require("../data");
const { response } = require("../utils")

module.exports = async (req, res) => {
    const { id } = req.params;
    const deleteCharacter = await data.delete(id);
    response(res, 200, deleteCharacter);
}