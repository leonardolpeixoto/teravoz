import models from '../models';

class CustomerRepository {
  constructor() {
    this.customerdb = models.model('Customer');
  }

  async findByContact($number) {
    await this.customerdb.findOne({
       
    })
  }
}
