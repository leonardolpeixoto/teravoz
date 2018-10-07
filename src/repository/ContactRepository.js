import models from '../data/models';
class ContactRepository {
  constructor() {
    this.contactdb = models.model('Contact');
  }

  async findByNumber(number) {
    contact = await this.contactdb.findOne({where: { number }, rejectOnEmpty: true});
  }
}
