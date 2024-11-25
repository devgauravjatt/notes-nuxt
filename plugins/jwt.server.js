import jwt from 'jsonwebtoken'

export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      verifyJwtToken: (token, secret, options) => {
        return jwt.verify(token, secret, options)
      },
    },
  }
})
