// /api/user POST

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  await prisma.user.create({
    data: {
      email: body.email,
      password: body.password,
    },
  })
  return { data: 'success!' }
})

// GET
// POST
// PATCH
// PUT
// DELETE
