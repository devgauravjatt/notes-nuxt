import jwt from 'jsonwebtoken'

export default defineEventHandler(async (event) => {
  try {
    const cookies = parseCookies(event)
    const token = cookies.NoteNestJWT

    if (!token) {
      throw createError({
        statusCode: 401,
        statusMessage: 'Not authorized to update',
      })
    }

    const decodedToken = await jwt.verify(token, process.env.JWT_SECRET)

    const newNote = await prisma.note.create({
      data: {
        text: '',
        userId: decodedToken.id,
      },
    })

    return newNote
  } catch (err) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Could not verify jwt',
    })
  }
})
