const payByDefaultCard = require('./payByDefaultCard')
const createChargeForGuest = require('./createChargeForGuest')
const createChargeForOurClient = require('./createChargeForOurClient')
const resolveCharge = require('./resolveCharge')
const updateCharge = require('./updateCharge')
const cancelCharge = require('./cancelCharge')

module.exports = {
  payByDefaultCard,
  createChargeForGuest,
  createChargeForOurClient,
  resolveCharge,
  updateCharge,
  cancelCharge,
}
