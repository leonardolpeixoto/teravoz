import Socket from 'socket.io';
import register from './register';

export default (server) => {
  const io = new Socket(server);

  register(io);
}