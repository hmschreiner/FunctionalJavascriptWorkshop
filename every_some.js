const CheckUsersValid = goodUsers => submittedUsers =>
  submittedUsers.every(submittedUser => goodUsers.some(goodUser => submittedUser.id === goodUser.id))

module.exports = CheckUsersValid
