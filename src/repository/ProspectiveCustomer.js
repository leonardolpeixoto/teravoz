import models from '../models';

class ProspectiveCustomerRepository {
  constructor() {
    this._prospectiveCustomerdb = models.model('ProspectiveCustomer');
  }

  async save(number) {
    this._prospectiveCustomerdb.findOrCreate({ where: { number } });
  }
}

const prospectiveCustomerRepository = new ProspectiveCustomerRepository();

export default prospectiveCustomerRepository;
