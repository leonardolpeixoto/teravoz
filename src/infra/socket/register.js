import event from '../../events';

export default (io) => {
  io.on('connection', socket => {
    event.on('actor.entered', async ({ actor, number, call_id }) => {
      socket.emit('actor.entered', { actor, number, call_id });
    });

    event.on('call.finished', ({ call_id, their_number }) => {
      socket.emit('call.finished', { call_id, their_number });
    });
  });
}