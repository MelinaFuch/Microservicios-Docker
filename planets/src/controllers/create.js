const data = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
    const newFilm = await data.create(req.body);
    response(res, 201, newFilm);
}