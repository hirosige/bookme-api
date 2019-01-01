const { createError } = require('apollo-errors')

const countryValidationMessages =
  createError("CountryVallidationMessages", {
    message: "The provided credentials are invalid."
 });

module.exports = countryValidationMessages