const io = require('socket.io')('8000')

io.on('connection', socket => {
  //Empêche Socket.io de recréer un ID à chaque connexion
  const id = socket.handshake.query.id
  socket.join(id)
  console.log(id)

  socket.on('send', ({ conversation, message }) => {
    conversation.participants.forEach(participant => {
      const newParticipants = conversation.participants.filter(p => p.id !== participant.id)
      newParticipants.push({ id: message.sender.id, login: message.sender.login })

      console.log("emit receive to", participant.id)
      socket.broadcast.to(participant.id).emit('receive', {
        conversation: { ...conversation, participants: newParticipants },
        message
      })
    });
  })
})