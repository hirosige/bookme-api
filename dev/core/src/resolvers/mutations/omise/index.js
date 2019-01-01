const accountModules = require('./account')
const balanceModules = require('./balance')
const cardModules = require('./card')
const chargeModules = require('./charge')
const customerModules = require('./customer')
const disputeModules = require('./dispute')
const documentModules = require('./document')
const eventModules = require('./event')
const recipientModules = require('./recipient')
const refundModules = require('./refund')
const scheduleModules = require('./schedule')
const transactionModules = require('./transaction')
const transferModules = require('./transfer')

module.exports = {
  ...accountModules,
  ...balanceModules,
  ...cardModules,
  ...chargeModules,
  ...customerModules,
  ...disputeModules,
  ...documentModules,
  ...eventModules,
  ...recipientModules,
  ...refundModules,
  ...scheduleModules,
  ...transactionModules,
  ...transferModules,
}
