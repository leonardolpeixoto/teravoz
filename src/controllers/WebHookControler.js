import event from '../events';

export default () => {
  const webhook = async (req, res, next) => {
    const eventRequest = req.body;

    event.emit(eventRequest.type, eventRequest);

    res.send('ok');
  }
  
  return {
    webhook
  };
}