import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

const MenuButton = ({ onPress }) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Image
        style={styles.image}
        source={require('../assets/menu.png')}
      />
    </TouchableOpacity>
  </View>
);

const styles = {
  container: {
    // TODO: should fix using flex
    position: 'absolute',
    height: 40,
    width: 45,
    right: 0,
    bottom: 0,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    position: 'absolute',
    height: '100%',
    width: 40,
    right: 0,
    resizeMode: 'contain',
  },
};

export { MenuButton };
