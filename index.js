const {serverConnect, app} = require('./src/server/server')
const {getDataControllers} = require('./src/controllers/getDataControllers')
serverConnect();

app.get('/', getDataControllers)

