import { customerRepository } from '../repository/CustomerRepository';
import delegate from '../service/delegate';

export default (event) => {
  event.on('call.standby', async ({ their_number, call_id }) => {
    try {
      customer = await customerRepository.findByContact(their_number);
      
      queueName = '';
      
      if(customer) {
        queueName = "CustomerAttendace";
      } else {
        queueName = "FirstAttendace";
      }

      queue = await queueRepository.findByName(queueName);
      delegate(call_id, queue.number);
    } catch (error) {
      event.emit('error', err);
    }
  })
}