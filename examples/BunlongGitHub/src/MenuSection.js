import React from 'react';
import {
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

export const MenuSection = ({ text, action }) => (
  <TouchableOpacity style={styles.block} onPress={action}>
    <Text style={styles.text}>
      {text}
    </Text>
    <Image
      style={styles.image}
      source={require('../assets/arrow.png')}
    />
  </TouchableOpacity>
);

const styles = {
  block: {
    marginLeft: 5,
    marginRight: 5,
    paddingLeft: 10,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  image: {
    position: 'absolute',
    height: '50%',
    width: 30,
    right: 0,
    resizeMode: 'contain',
  },
};
