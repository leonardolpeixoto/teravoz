import { Server } from 'http';
import config from './config/server';
import app from './app';

const {
  port,
} = config;

const httpServer = Server(app);

httpServer.listen(port, () => {
  console.log(`listening on ${portExpress}`);
});


export default httpServer;
