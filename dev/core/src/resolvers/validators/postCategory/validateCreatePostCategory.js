const validateCreatePostCategory = async ({
  name
}, ctx) => {
  let errors = []

  if (name === "") errors.push({ message: "You must input name" })

  if (await ctx.prisma.$exists.postCategory({ name: name })) {
    errors.push({ message: "Name you input already exists." })
  }

  if (errors.length !== 0) throw JSON.stringify(errors)
}

module.exports = validateCreatePostCategory
