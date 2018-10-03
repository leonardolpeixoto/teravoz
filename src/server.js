import { Server } from 'http';
// import config from './config/server';
import app from './app';

// const {
//   port,
// } = config;

const httpServer = Server(app);

httpServer.listen(8080, () => {
  console.log(`listening on 8080`);
});


// export default httpServer;
