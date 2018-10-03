import HttpStatus from 'http-status';
import apiEvents from '../events';

export default () => {
  const webhook = async (req, res, next) => {
    const event = req.body;

    apiEvents.emit(event.type, event);
  }
  
  return {
    webhook
  };
}