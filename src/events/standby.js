import { customerRepository } from '../repository/CustomerRepository';
import prospectiveCustomerRepository from '../repository/ProspectiveCustomer';
import { queueRepository } from '../repository/QueueRepository';

import delegate from '../service/delegate';

export default (event) => {
  event.on('call.standby', async ({ their_number, call_id }) => {
    try {
      let queueName   = '';
      const customer  = await customerRepository.findByContact(their_number);
      
      if(customer) {
        queueName = "Customer Attendace";
      } else {
        queueName = "First Attendace";
        prospectiveCustomerRepository.save(their_number);
      }

      const queue = await queueRepository.findByName(queueName);
      await delegate(call_id, queue.number);
    } catch (error) {
      event.emit('error', error);
    }
  })
}