const omiseApis = require('./omise')
const googleApis = require('./google')
const bookMeModules = require('./models')

module.exports = {
  ...omiseApis,
  ...googleApis,
  ...bookMeModules,
}
