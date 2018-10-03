import models from '../models';
class ContactRepository {
  constructor() {
    this.contactdb = models.model('Contact');
  }

  async findByNumber(number) {
    contact = await this.contactdb.findOne({where: { number }, rejectOnEmpty: true});
  }
}
