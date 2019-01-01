const RoomPhoto = async (parent, args, context) => {
  const roomPhoto = await context.prisma.roomPhoto({
    id: args.id,
  })

  return roomPhoto
}

module.exports = RoomPhoto
