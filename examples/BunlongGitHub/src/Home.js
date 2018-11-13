import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './Header';

export default class Home extends Component {
  render() {
    return (
      <View>
        <Header />
        <View style={styles.container}>
          <Text style={styles.welcome}>Welcome to react-native-splash-screen-mask</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    top: 40,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
