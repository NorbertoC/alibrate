import Config from '../Config';
import Service from '../Service';

const loginUrl = Config.loginUrl;

export default class AuthService {
  static login(data, successCallback, errorCallback) {
    const user = {
      username: data.user,
      password: data.password,
    };
    Service.post(loginUrl, user).then((response) => {
      successCallback(response.data);
    }).catch((err) => {
      errorCallback(err);
      console.log('login error:', err);
    });
  }
}
