import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

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
    fontSize: 13,
    fontWeight: '600',
    paddingVertical: 15,
  },
  buttonStyle: {
    alignSelf: 'stretch',
    borderRadius: 2,
    backgroundColor: '#47A6DC',
    marginVertical: 5,
  },
};

export { Button };
