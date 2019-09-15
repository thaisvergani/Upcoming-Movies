const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const server = express();

server.use(cors());

//avisa ao servidor que está utilizando json
server.use(express.json());

//adicionando as rotas no server
server.use(routes);

const port = process.env.PORT || 5000;

server.listen(port, () => `Server running on port ${port}`);

const path = require('path')
// Serve static files from the React frontend app
server.use(express.static(path.join(__dirname, 'frontend/build')))

// Anything that doesn't match the above, send back index.html
server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/frontend/build/index.html'))
})