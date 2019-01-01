const advantageModules = require('./advantage')
const advantageIconModules = require('./advantageIcon')
const areaModules = require('./area')
const authModules = require('./auth')
const bookingModules = require('./booking')
const contactModules = require('./contact')
const countryModules = require('./country')
const favoriteModules = require('./favorite')
const hotelModules = require('./hotel')
const hotelPhotoModules = require('./hotelPhoto')
const postModules = require('./post')
const postCategoryModules = require('./postCategory')
const postHeroModules = require('./postHero')
const postPhotosModules = require('./postPhotos')
const profileModules = require('./profile')
const reviewModules = require('./review')
const roomModules = require('./room')
const roomPhotoModules = require('./roomPhoto')
const tagModules = require('./tag')
const userModules = require('./user')
const userPhotoModules = require('./userPhoto')

module.exports = {
  ...advantageModules,
  ...advantageIconModules,
  ...areaModules,
  ...authModules,
  ...bookingModules,
  ...contactModules,
  ...countryModules,
  ...favoriteModules,
  ...hotelModules,
  ...hotelPhotoModules,
  ...postModules,
  ...postCategoryModules,
  ...postHeroModules,
  ...postPhotosModules,
  ...profileModules,
  ...reviewModules,
  ...roomModules,
  ...roomPhotoModules,
  ...tagModules,
  ...userModules,
  ...userPhotoModules,
}
