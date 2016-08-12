const GetShortMessages = messages => messages.filter(text => text.message.length < 50).map(item => item.message)

module.exports = GetShortMessages
