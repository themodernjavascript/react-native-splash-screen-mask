import React from 'react';
import {
  Scene,
  Router,
  Stack,
  Drawer,
} from 'react-native-router-flux';

import MenuContent from './MenuContent';
import SplashScreen from './SplashScreen';
import Home from './Home';
import Me from './Me';

export const RouterComponent = () => {
  return (
    <Router>
      <Stack key="root" hideNavBar>
        <Drawer
          key="drawer"
          hideNavBar
          contentComponent={MenuContent}
        >
          <Scene key="main" hideNavBar>
            <Scene
              key="splashScreenScene"
              component={SplashScreen}
              initial
            />
            <Scene
              key="homeScene"
              component={Home}
            />
            <Scene
              key="meScene"
              component={Me}
            />
          </Scene>
        </Drawer>
      </Stack>
    </Router>
  );
};
