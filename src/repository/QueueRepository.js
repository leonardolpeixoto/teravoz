import models from '../data/models';

class QueueRepository {
  constructor() {
    this._customerdb = models.model('Queue');
  }

  async findByName(name) {
    const queue = await this._customerdb.findOne({where: { name }});
    return queue;
  }
}

export const queueRepository = new QueueRepository();

