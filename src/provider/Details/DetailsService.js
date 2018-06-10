import Config from '../Config';
import Service from '../Service';
import Async from '../../components/common/Async';

const topReadersUrl = Config.topReadersUrl;
const topReviewersUrl = Config.topReviewersUrl;

export default class DetailsService {
  static getTopReaders(successCallback, errorCallback) {
    Async.getItem('data').then((data) => {
      const endpoint = `${topReadersUrl}?page=1&limit=7`;
      Service.get(endpoint).then((response) => {
        successCallback(response.data);
      }).catch((err) => {
        errorCallback(err);
      });
    }).catch((error) => {
      console.log('error dataASYNC: ', error);
    });
  }
  
  static getTopReviewers(successCallback, errorCallback) {
    Async.getItem('data').then((data) => {
      const endpoint = `${topReviewersUrl}?page=1&limit=7`;
      Service.get(endpoint).then((response) => {
        successCallback(response.data);
      }).catch((err) => {
        errorCallback(err);
      });
    }).catch((error) => {
      console.log('error dataASYNC: ', error);
    });
  }
}
