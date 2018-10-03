import models from '../models';

class CustomerRepository {
  constructor() {
    this._customerdb = models.model('Customer');
  }

  async findByContact(number) {
    customer = await this._customerdb.findOne({
      include: [{
        model: models.model('Contact'),
        where: {
          number
        }
      }],
    });

    return customer;
  }
}

export const customerRepository = new CustomerRepository();

