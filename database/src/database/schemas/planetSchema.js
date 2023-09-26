const { Schema } = require("mongoose");

const planetSchema = new Schema ({
    _id: String,
    name: String,
    rotation_period: String,
    orbital_period: String,
    diameter: String,
    climate: String,
    gravity: String,
    terrain: String,
    surface_water: String,
    residents: [{ type: String, ref: "Character" }],
    films: [{ type: String, ref: "Film" }]
})

planetSchema.statics.list = async function () {
    return await this.find()
    .populate("residents", ["_id", "name"])
    .populate("films", ["_id", "title"]);
  };
  
  planetSchema.statics.getOne = async function (_id) {
    return await this.findById(_id)
    .populate("residents", ["_id", "name"])
    .populate("films", ["_id", "title"]);
  };
  
  planetSchema.statics.insert = async function (planet) {
    return await this.create(planet);
  };
  
  planetSchema.statics.edit = async function (_id, data) {
    return await this.updateOne({ _id }, data);
  };
  
  planetSchema.statics.deleted = async function (id) {
    return await this.deleteOne({ _id: id });
  };

module.exports = planetSchema;