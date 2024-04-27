const { getDataRepository } = require('../repository/getDataRepository');

exports.getDataControllers = async (req, res) => {
    try {
      const dataApi = await getDataRepository();
      res.send(dataApi)
    } catch (error) {
      res.send('Erro ao gerar Dados:' + error);
    }
  };