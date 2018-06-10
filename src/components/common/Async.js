import { AsyncStorage } from 'react-native';

class Async {
  static async getItem(key) {
    return await AsyncStorage.getItem(key)
      .then((result) => {
        if (result) {
          try {
            result = JSON.parse(result);
          } catch (e) {
            console.error('AsyncStorage getItem error deserializing JSON for key: ' + key, e.message);
          }
        }
        return result;
      });
  }
}

export default Async
