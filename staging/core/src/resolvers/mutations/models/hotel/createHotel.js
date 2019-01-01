const { authorize } = require('../../../../utils/authService')
const validateCreateHotel = require('../../../validators/hotel/validateCreateHotel')

const createHotel = async (parent, args, ctx, info) => {
  authorize(ctx)
  await validateCreateHotel(args.input, ctx)

  return ctx.prisma.createHotel({
    address: args.input.address,
    appliances: args.input.appliances,
    email: args.input.email,
    fax: args.input.fax,
    isPublished: args.input.isPublished,
    latitude: args.input.latitude,
    longitude: args.input.longitude,
    name: args.input.name,
    tel: args.input.tel,
    areaId: args.input.areaId,
    area: args.input.area,
    countryId: args.input.countryId,
    country: args.input.country,
    photosId: args.input.photosId,
    photos: args.input.photos,
    advantagesIds: args.input.advantagesIds,
    advantages: args.input.advantages,
    bookingsIds: args.input.bookingsIds,
    bookings: args.input.bookings,
    favoritesIds: args.input.favoritesIds,
    favorites: args.input.favorites,
    reviewsIds: args.input.reviewsIds,
    reviews: args.input.reviews,
    roomsIds: args.input.roomsIds,
    rooms: args.input.rooms,
  })
  .then(res => {
    return {
      ...res,
      area: ctx.prisma.hotel({ id: res.id }).area(),
      country: ctx.prisma.hotel({ id: res.id }).country(),
      photos: ctx.prisma.hotel({ id: res.id }).photos(),
      advantages: ctx.prisma.hotel({ id: res.id }).advantages(),
      bookings: ctx.prisma.hotel({ id: res.id }).bookings(),
      favorites: ctx.prisma.hotel({ id: res.id }).favorites(),
      reviews: ctx.prisma.hotel({ id: res.id }).reviews(),
      rooms: ctx.prisma.hotel({ id: res.id }).rooms(),
    }
  })
  .catch(err => { throw new Error(err) })
}

module.exports = createHotel
