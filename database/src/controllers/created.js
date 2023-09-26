const store = require("../database");

module.exports = async (req, res) => {    
    const { model } = req.params;
    const newModel = await store[model].create(req.body);
    res.status(200).json({message: "Se creó con éxito", newData: newModel})
}
