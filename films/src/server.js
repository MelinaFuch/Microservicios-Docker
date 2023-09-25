const express = require ("express");
const morgan = require ("morgan");
const { ClientError } = require("./utils/errors");

const server = express();

server.use(express.json());
server.use(morgan("dev"));

server.use("/films", require("./routes"));
server.use('*', (req, res) => {
    res.status(404).send('Not found')
})

server.use('*', (req, res) => {
    // throw new ClientError('Not foundt404', 406)
    res.status(404).send('Not found')
})

server.use((err, req, res, next) => {
    res.status(err.statusCode || 500).send({
        error: true,
        message: err.message
    })
})

module.exports = server;