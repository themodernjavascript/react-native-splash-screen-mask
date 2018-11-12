import React from 'react';
import { View } from 'react-native';
import { MenuButton } from './MenuButton';
import { Actions } from 'react-native-router-flux';

const Header = props => {
  return (
    <View style={styles.view}>
      <MenuButton onPress={Actions.drawerOpen} />
    </View>
  );
};

const styles = {
  view: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    position: 'relative',
  },
};

export { Header };
