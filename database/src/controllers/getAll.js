const store = require("../database");
const { ClientError } = require("../utils/errors");

module.exports = async (req, res) => {    
    const { model } = req.params;
    const data = await store[model].list();
    res.status(200).json(data);
}