import EventEmitter from 'events';
import standByRegister from './standby';

class ApiEvent extends EventEmitter {}

const apiEvent = new ApiEvent();

standByRegister(apiEvent);

export default apiEvent;