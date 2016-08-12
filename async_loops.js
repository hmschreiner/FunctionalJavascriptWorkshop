'use strict'

const LoadUsers = (users, done) => done(users.reduce((user) => LoadUser(user, (user) => user), []))
const LoadUser = (user, cb) => cb(user)

module.exports = LoadUsers
