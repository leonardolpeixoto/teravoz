import { Server } from 'http';
import Socket from './infra/socket/register';

import app from './app';

const httpServer = Server(app);

httpServer.listen(3000, () => {
  console.log(`listening on 3000`);
});

Socket(httpServer);
