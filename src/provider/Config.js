const _env = 'dev';

class Config {
  static get loginUrl() {
    // change prod variable when defined
    switch (_env) {
      case 'dev':
        return 'https://api.alibrate.com/v1/auth/local';
      case 'prod':
        return '';
      default:
        return 'https://api.alibrate.com/v1/auth/local';
    }
  }
  
  static get topReadersUrl() {
    // change prod variable when defined
    switch (_env) {
      case 'dev':
        return 'https://api.alibrate.com/v1/rankings/topReaders';
      case 'prod':
        return '';
      default:
        return 'https://api.alibrate.com/v1/rankings/topReaders';
    }
  }
  
  static get topReviewersUrl() {
    // change prod variable when defined
    switch (_env) {
      case 'dev':
        return 'https://api.alibrate.com/v1/rankings/topReviewers';
      case 'prod':
        return '';
      default:
        return 'https://api.alibrate.com/v1/rankings/topReviewers';
    }
  }
}

export default Config;
