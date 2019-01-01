const validateCreateCountry = async ({
  name,
  code,
  slug,
}, ctx) => {
  let errors = []
  console.log(name, code, slug)
  console.log(ctx.prisma.$exists.country({ name: name }))

  if (name === "") errors.push({ message: "You must input name" })
  if (code === "") errors.push({ message: "You must input code" })
  if (slug === "") errors.push({ message: "You must input slug" })

  if (await ctx.prisma.$exists.country({ name: name })) {
    errors.push({ message: "Name you input already exists." })
  }

  if (await ctx.prisma.$exists.country({ code: code })) {
    errors.push({ message: "Code you input already exists." })
  }

  if (await ctx.prisma.$exists.country({ slug: slug })) {
    errors.push({ message: "Slug you input already exists." })
  }

  if (errors.length !== 0) throw JSON.stringify(errors)
}

module.exports = validateCreateCountry
