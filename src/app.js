import bodyParser from 'body-parser';
import helmet from 'helmet';
import express from 'express';
import cors from 'cors';
import logger from 'morgan';
import routes from './routes';


const app = express();

//
// Load Models
// -----------------------------------------------------------------------------
// models(app);

//
// Register Node.js middleware
// -----------------------------------------------------------------------------
app.use(helmet());
app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.send(res.locals.error);
});


export default app;
