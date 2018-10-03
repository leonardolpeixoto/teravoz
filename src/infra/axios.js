import axios from 'axios';
import userInfoRepository from '../repository/UserInfoRepository';

userApi = userInfoRepository.findUserApi();
authorization = userApi.authorization();

const instance = axios.create({
  baseURL: 'https://api.teravoz.com.br',
  headers: {
    Authorization: `Basic ${authorization}`,
  }
});

export default instance;
