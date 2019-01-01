const HotelPhoto = async (parent, args, context) => {
  const hotelPhoto = await context.prisma.hotelPhoto({
    id: args.id,
  })

  return hotelPhoto
}

module.exports = HotelPhoto
