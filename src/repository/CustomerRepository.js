import models from '../models';
import logger from '../infra/logger';

class CustomerRepository {
  constructor() {
    this._customerdb = models.model('Customer');
  }

  async findByContact(number) {
    const customer = await this._customerdb.findOne({
      include: [{
        model: models.model('Contact'),
        required: true,
        where: {
          number
        }
      }],
    });

    return customer;
  }
}

export const customerRepository = new CustomerRepository();

