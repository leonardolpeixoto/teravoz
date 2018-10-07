import { Server } from 'http';
import Socket from './infra/socket';

import app from './app';
import logger from './infra/logger';

const httpServer = Server(app);

httpServer.listen(3001, () => {
  logger.info('listening on 3001');
});

Socket(httpServer);
