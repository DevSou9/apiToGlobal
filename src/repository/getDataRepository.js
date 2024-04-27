const fs = require('fs');
const { promisify } = require('util');
const path = require('path');
const filePath = path.join(__dirname, '../data.json');

function getDataRepository(dataInicial, dataFinal) {
  const readFileAsync = promisify(fs.readFile);

  return readFileAsync(filePath, 'utf8')
    .then((dados) => {
      const parseData = JSON.parse(dados);
      console.log(parseData);
      return parseData.pedidos;
    })
    .catch((error) => {
      console.error(error);
    });
}

module.exports = { getDataRepository };