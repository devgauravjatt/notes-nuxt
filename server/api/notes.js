// /api/notes return all the notes
import jwt from 'jsonwebtoken'
export default defineEventHandler(async (event) => {
  try {
    const cookies = parseCookies(event)
    const token = cookies.NoteNestJWT

    if (!token) {
      throw createError({
        statusCode: 401,
        statusMessage: 'Not authorized to access notes',
      })
    }

    const decodedToken = await jwt.verify(token, process.env.JWT_SECRET)

    const notes = await prisma.note.findMany({
      where: {
        userId: decodedToken.id,
      },
    })

    return notes
  } catch (err) {
    console.log(err)
  }
})
