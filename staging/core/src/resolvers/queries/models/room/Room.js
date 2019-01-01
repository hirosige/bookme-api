const Room = async (parent, args, context) => {
  const room = await context.prisma.room({
    id: args.id,
  })

  return room
}

module.exports = Room
