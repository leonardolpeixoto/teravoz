import event from '../../events';

export default (io) => {
  io.on('connection', socket => {
    event.on('actor.entered', ({ actor, number, call_id }) => {
      socket.emit('actor.entered', { actor, number, call_id });
    });

    event.on('call.finished', ({ call_id }) => {
      socket.emit('call.finished', call_id);
    });
  });
}