import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import L from './LayoutSize';

const Button = ({ onPress, children, disabled }) => {
  const { buttonStyle, textStyle } = styles;
  
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={buttonStyle}
    >
      <Text style={[textStyle, { color: disabled ? 'grey' : '#fff' }]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: 'white',
    fontSize: L.h(13),
    fontWeight: '600',
    paddingVertical: L.h(15),
  },
  buttonStyle: {
    alignSelf: 'stretch',
    borderRadius: 2,
    backgroundColor: '#276D88',
    marginVertical: L.h(5),
  },
};

export { Button };
