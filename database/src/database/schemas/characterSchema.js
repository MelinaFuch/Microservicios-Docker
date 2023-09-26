const { Schema } = require("mongoose");

const characterSchema = new Schema ({
    _id: String,
    name: String,
    height: String,
    mass: String,
    hair_color: String,
    skin_color: String,
    eye_color: String,
    birth_year: String,
    gender: {
        type: String,
        enum: [
          "male",
          "n/a",
          "female",
          "hermaphrodite",
          "none"
        ]},
    homeworld: {
        type: String,
        ref: "Planet"
    },
    films: [{type: String, ref: "Film"}]
})

characterSchema.statics.list = async function () {
    return await this.find()
    .populate("homeworld", ["_id", "name"])
    .populate("films", ["_id", "title"]);
};
  
characterSchema.statics.getOne = async function (_id) {
  return await this.findById(_id)
  .populate("homeworld", ["_id", "name"])
  .populate("films", ["_id", "title"]);
};
  
characterSchema.statics.insert = async function (character) {
  return await this.create(character);
};
  
characterSchema.statics.edit = async function (_id, data) {
  return await this.updateOne({ _id }, data);
};
  
characterSchema.statics.deleted = async function (_id) {
  return await this.deleteOne({ _id });
};

module.exports = characterSchema;