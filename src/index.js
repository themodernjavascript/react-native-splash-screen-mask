import React, { Component } from 'react';

import {
  Animated,
  Dimensions,
  View,
  Text,
  StyleSheet,
} from 'react-native';

type Props = {|
  +imageSource: any,
  +navigationAction: any,
  +backgroundStyle: any,
  +duration: number,
|};

export default class SplashScreenMask extends React.Component<Props> {
  static defaultProps = {
    duration: 4000,
    backgroundStyle: { backgroundColor: '#fff' },
  };

  state = {
    loadingProgress: new Animated.Value(0),
    isSolidLoaded: false,
    isTransLoaded: false,
    isAnimDone: false
  };

  componentDidUpdate(propsOld, stateOld) {
    const {
      isSolidLoaded,
      isTransLoaded,
    } = this.state;

    const {
      isSolidLoaded:isSolidLoadedOld,
      isTransLoaded:isTransLoadedOld,
    } = stateOld;

    if (isSolidLoaded !== isSolidLoadedOld || isTransLoaded !== isTransLoadedOld) {
      if (isSolidLoaded && isTransLoaded) {
        const { loadingProgress } = this.state;
        Animated.timing(loadingProgress, {
          toValue: 100,
          duration: 3000,
          useNativeDriver: true
        }).start(this.setAnimDone);
      }
    }
  }

  render() {
    const { loadingProgress, isAnimDone } = this.state;
    const imgHeight = 3500;
    const imgWidth = 3500;
    const logoHeight = 64;
    const logoWidth = 64;
    const { height:winHeight, width:winWidth } = Dimensions.get('window');

    const imageTransform = [
      {
        scale: loadingProgress.interpolate({
          inputRange: [0, 10, 100],
          outputRange: [1, 0.8, 70],
        })
      }
    ];

    const imageOpacity = loadingProgress.interpolate({
      inputRange: [0, 15, 30],
      outputRange: [1, 1, 0],
      extrapolate: 'clamp'
    });

    const transStyle = {
      position: 'absolute',
      height: imgHeight,
      width: imgWidth,
      top: (-imgHeight / 2) + (winHeight / 2),
      left: (-imgWidth / 2) + (winWidth / 2),
      transform: imageTransform,
    };

    return (
      <View style={[styles.container, this.props.backgroundStyle]}>
        { !isAnimDone && <Animated.Image source={{uri:'transparent'}} style={transStyle} onLoad={this.handleTransLoad} onError={this.handleTransError} fadeDuration={0} /> }
        { !isAnimDone && <Animated.Image source={this.props.imageSource} onLoad={this.handleSolidLoad} onError={this.handleSolidError} fadeDuration={0} /> }
      </View>
    );
  }

  handleTransLoad = () => {
    console.log('trans loaded');
    this.setState(() => ({ isTransLoaded: true }));
  }

  handleSolidLoad = () => {
    console.log('solid loaded');
    this.setState(() => ({ isSolidLoaded: true }));
  }

  handleTransError = () => {
    console.log('trans errored');
    this.setState(() => ({ isTransLoaded: true }));
  }

  handleSolidError = e => {
    console.log('solid errored, e:', Object.keys(e), JSON.stringify(e.nativeEvent));
    this.setState(() => ({ isSolidLoaded: true }));
  }

  setAnimDone = () => { 
    this.setState(() => ({ isAnimDone: true }));
    this.props.navigationAction();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
