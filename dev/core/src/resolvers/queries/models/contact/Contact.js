const Contact = async (parent, args, context) => {
  const contact = await context.prisma.contact({
    id: args.id,
  })

  return contact
}

module.exports = Contact
