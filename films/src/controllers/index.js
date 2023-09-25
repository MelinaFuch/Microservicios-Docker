const { catchedAsync } = require("../utils");

module.exports = {
    getAll: catchedAsync(require("./getAll")),
    getOne: catchedAsync(require("./getOne")),
    create: catchedAsync(require("./create")),
    edit: catchedAsync(require("./edit")),
    delete: catchedAsync(require("./delete"))
}