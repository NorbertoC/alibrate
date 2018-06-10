import React from 'react';
import { View, ActivityIndicator, Text } from 'react-native';

const Spinner = ({ size, color, text }) => {
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator size={size || 'large'} color={color || '#000'} />
      <Text>{text || 'Cargando..'}</Text>
    </View>
  );
};

const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export { Spinner };
