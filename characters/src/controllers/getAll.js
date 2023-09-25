const { response } = require("../utils")
const data = require("../data");

module.exports = async (req, res) => {
  const characters = await data.list();
  response(res, 200, characters);
}