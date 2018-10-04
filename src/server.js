import { Server } from 'http';
import Socket from './infra/socket';

import app from './app';

const httpServer = Server(app);

httpServer.listen(3001, () => {
  console.log(`listening on 3000`);
});

Socket(httpServer);
