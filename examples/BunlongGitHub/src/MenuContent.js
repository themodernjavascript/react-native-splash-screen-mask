import React, { Component } from 'react';
import { View } from 'react-native';

import { Actions } from 'react-native-router-flux';
import { MenuSection } from './MenuSection';

class MenuContent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MenuSection
          text="Home"
          action={Actions.homeScene}
        />
        <MenuSection
          text="Me"
          action={Actions.meScene}
        />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#262626',
    paddingTop: 30,
  },
};

export default MenuContent;
