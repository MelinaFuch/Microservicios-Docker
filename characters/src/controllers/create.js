const data = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
    const newCharacter = await data.create(req.body);
    response(res, 201, newCharacter);
}