import React from 'react';
import { Image } from 'react-native';

const styles = {
  image: {
    flex: 1,
    height: 200,
    resizeMode: 'contain',
  },
};

export const HeaderLogo = () => (
  <Image
    style={styles.image}
    source={require('../assets/IMG_2038.png')}
  />
);
