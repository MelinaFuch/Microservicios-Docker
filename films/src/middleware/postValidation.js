const { ClientError } = require("../utils/errors");

module.exports = (req, res, next) => {
    const { title, opening_crawl, director, producer, release_date } = req.body;
    if (!title || !opening_crawl || !director || !producer || !release_date) {
        throw new ClientError("Faltan datos de la película", 400)
    }
    return next();
}