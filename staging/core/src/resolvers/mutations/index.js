const omiseApis = require('./omise')
const bookMeModules = require('./models')

module.exports = {
  ...omiseApis,
  ...bookMeModules,
}
