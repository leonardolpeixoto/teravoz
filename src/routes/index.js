import webhook from './webhook';

export default (app) => {

  app.use('/webhook', webhook);

}