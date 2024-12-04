// /api/notes return all the notes

export default defineEventHandler(async (event) => {
  try {
    const notes = await prisma.note.findMany()

    return notes
  } catch (err) {
    console.log(err)
  }
})
