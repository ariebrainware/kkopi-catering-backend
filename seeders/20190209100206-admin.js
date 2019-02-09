'use strict'
const bcrypt = require('bcryptjs')

const ADMIN = require('../admin-creds')

const hashing_password = (password, saltRounds = 10) => {
  return new Promise((resolve) => {
    bcrypt.hash(password, saltRounds).then(hash => resolve(hash))
  })
}

module.exports = {
  up: async(queryInterface) => {
    const admins = [{
      fullname: ADMIN.FULLNAME,
      username: ADMIN.USERNAME,
      email: ADMIN.EMAIL,
      phone_number: ADMIN.PHONE_NUMBER,
      createdAt: new Date(),
      updatedAt: new Date(),
    }]
    await hashing_password(ADMIN.PASSWORD).then(newHash => admins[0].password_hash = newHash)

    return queryInterface.bulkInsert('admins', admins, {})
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('admins', null, {})
  },
}
