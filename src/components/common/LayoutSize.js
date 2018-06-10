import React from 'react';
import { Platform, Dimensions } from 'react-native';

const screen = Dimensions.get('window');

let _formulaHeight = null;
let _formulaWidth = null;
let _average = null;

class LayoutSize {
  static size() {
    if (_formulaHeight == null) {
      _formulaHeight = screen.height / (Platform.OS === 'ios' ? 667 : 640);
      _formulaWidth = screen.width / (Platform.OS === 'ios' ? 375 : 360);
      _average = (_formulaHeight + _formulaWidth) / 2;
    }
  }

  static h(number) {
    return number * _formulaHeight;
  }

  static w(number) {
    return number * _formulaWidth;
  }

  static hProm(number) {
    return number * _average;
  }
  static wProm(number) {
    return number * _average;
  }
}

LayoutSize.size();

export default LayoutSize;