const Booking = async (parent, args, context) => {
  const booking = await context.prisma.booking({
    id: args.id,
  })

  return booking
}

module.exports = Booking
