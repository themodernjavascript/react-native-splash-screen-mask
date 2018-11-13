import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import SplashScreenMask from 'react-native-splash-screen-mask';
import { Actions } from 'react-native-router-flux';

import IMAGE from '../assets/react.png';

export default class SplashScreen extends Component {
  render() {
    return (
      <SplashScreenMask
        imageSource={IMAGE}
        navigationAction={() => Actions.homeScene()}
        backgroundStyle={styles.backgroundStyle}
        duration={3000}
      />
    );
  }
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#fff',
  },
});
