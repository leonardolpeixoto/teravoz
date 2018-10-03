import axios from 'axios';
import userConfigRepository from '../repository/UserConfigRepository';

function instance () {
  return userConfigRepository
    .findUserApi()
    .then(userApi => {
      const authorization = userApi.authorization();
  
      return axios.create({
        baseURL: 'https://api.teravoz.coasm.br',
        headers: {
          Authorization: `Basic ${authorization}`,
        }
      });
    });
};


export default instance;
