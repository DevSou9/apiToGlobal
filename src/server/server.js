const express = require('express');
const app = express();
const port = 3001;
const path = require('path');


function serverConnect() {
  app.listen(port, () => {
    console.log('Servidor rodando na porta');
  });
}

module.exports = { app, serverConnect };



