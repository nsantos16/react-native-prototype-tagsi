import httpClient from 'httpClient';

class UserService {
  login(user) {
    return httpClient.post('/user/login', user);
  }

  logout() {
    return httpClient.post('/user/logout');
  }

  signUp(user) {
    return httpClient.post('/user/register', user);
  }
}

export default new UserService();
