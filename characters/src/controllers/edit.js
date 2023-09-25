const data = require("../data");
const { response } = require("../utils")

module.exports = async (req, res) => {
    const { id } = req.params;
    const editCharacter = await data.edit(id, req.body);
    response(res, 200, editCharacter);
}