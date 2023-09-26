const { catchedAsync } = require("../utils");

module.exports = {
  getAll: catchedAsync(require("./getAll")),
  getOne: catchedAsync(require("./getOne")),
  create: catchedAsync(require("./created")),
  edit: catchedAsync(require("./edit")),
  delete: catchedAsync(require("./deleted")),
};