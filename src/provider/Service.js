import axios from 'axios';

class Service {
  constructor() {
    const service = axios.create({
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    this.service = service;
  }
  
  setToken(token) {
    this.service.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

  get(path) {
    return new Promise((resolve, reject) => {
      this.service.request({
        method: 'GET',
        url: path,
      }).then((response) => {
        resolve(response);
      }).catch((err) => {
        if (err.message === 'Network Error') {
          reject('No hay conexión. - GET error');
        } else if (err.response) {
          let msg = '';
          if (err.response.data.message) {
            msg = err.response.data.message;
          } else {
            msg = err.response.data;
          }
          console.log('Service GET error:', err.response);
          reject(msg);
        } else {
          reject(err);
        }
      });
    });
  }
  
  post(path, payload) {
    return new Promise((resolve, reject) => {
      this.service.request({
        method: 'POST',
        url: path,
        data: payload,
      }).then((response) => {
        resolve(response);
      }).catch((err) => {
        // change acordingly
        if (err.message === 'Network Error') {
          reject('No hay conexión.');
        } else if (err.response) {
          let msg = '';
          if (err.response.data.message) {
            msg = err.response.data.message;
          } else {
            msg = err.response.data;
          }
          console.log('Service POST error:', err.response);
          reject(msg);
        } else {
          reject(err);
        }
      });
    });
  }
}

export default new Service();
