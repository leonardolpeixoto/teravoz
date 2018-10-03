import models from '../models';

class UserConfingRepository {
  constructor() {
    this._userConfigdb = models.model('UserConfig');
  }

  async findUserApi() {
    const user = await this._userConfigdb.findOne({
      where: { user_name: 'teravoz' },
    });

    return user;
  }
}

const userConfigRepository = new UserConfingRepository();

export default userConfigRepository; 
