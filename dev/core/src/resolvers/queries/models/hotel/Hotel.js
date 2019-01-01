const Hotel = async (parent, args, context) => {
  const hotel = await context.prisma.hotel({
    id: args.id,
  })

  return hotel
}

module.exports = Hotel
