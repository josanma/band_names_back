const express = require('express');
const path = require('path');
require('dotenv').config();
const port = process.env.PORT;

// app express
const app = express();

// server
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const pubicPath = path.resolve(__dirname, 'public');
app.use(express.static(pubicPath));

server.listen(port, (err) => {
    if (err) {
        throw new Error(err);
    }

    console.log(`Conectado al puerto ${port}`);
});

module.exports = {
    io
}
