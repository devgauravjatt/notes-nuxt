// /api/user POST

// Hashing passwords
// - Prevents PW from being stored in plaintext
// - mypassword123 jnjvsadcjncuwinuiwebjksab,/#@$fasDFVCASDR$@#

// Salts
// - salt = string of random characters
// - Typically added to the beginning of a user's PW
//    - mypassword123 becomes x#fSA#Amypassword123
// - Used to prevent hackers from using precomputed hash tables to crack a PW
// - Each user gets their own salt so even if two users have the same PW
//   their password's look completely different

import bcrypt from 'bcryptjs'
import validator from 'validator'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)

    if (!validator.isEmail(body.email)) {
      throw createError({
        statusCode: 400,
        message: 'Invalid email, please change.',
      })
    }

    if (
      !validator.isStrongPassword(body.password, {
        minLength: 8,
        minLowercase: 0,
        minUppercase: 0,
        minNumbers: 0,
        minSymbols: 0,
      })
    ) {
      throw createError({
        statusCode: 400,
        message: 'Password is not minimum 8 characters, please change.',
      })
    }

    const salt = await bcrypt.genSalt(10)
    const passwordHash = await bcrypt.hash(body.password, salt)

    // Sends to database
    await prisma.user.create({
      data: {
        email: body.email,
        password: passwordHash,
        salt: salt,
      },
    })
    return { data: 'success!' }
  } catch (error) {
    console.log(error.code)

    if (error.code === 'P2002') {
      throw createError({
        statusCode: 409,
        message: 'An email with this address already exists.',
      })
    }

    throw error
  }
})

// GET
// POST
// PATCH
// PUT
// DELETE
