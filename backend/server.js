const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const server = express();

server.use(cors());

//avisa ao servidor que está utilizando json
server.use(express.json());

//adicionando as rotas no server
server.use(routes);

const port = 5000;

server.listen(port, () => `Server running on port ${port}`);