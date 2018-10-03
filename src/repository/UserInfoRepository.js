import models from '../models';

class UserInfoRepository {
  constructor() {
    this._userInfodb = models.model('UserInfo');
  }

  async findUserApi() {
    user = await this._userInfodb.findOne({
      where: { name: 'teravoz' },
    });

    return user;
  }
}

const userInfoRepository = new UserInfoRepository();

export default userInfoRepository; 
