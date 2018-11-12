
# react-native-splash-screen-mask

[![version](https://img.shields.io/npm/v/react-native-splash-screen-mask.svg?style=flat-square)](https://www.npmjs.com/package/react-native-splash-screen-mask) [![downloads](https://img.shields.io/npm/dm/react-native-splash-screen-mask.svg?style=flat-square)](https://www.npmjs.com/package/react-native-splash-screen-mask) [![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)](http://opensource.org/licenses/MIT).

A splash screen for react-native, It hide when application loaded. It works on iOS, Android and Window.

## Content

- [Examples](#examples)
- [Installation](#installation)
- [Props](#props)
- [Wrap Up](#wrap-up)
- [Contribution](#contribution)

## Examples

[Examples](./examples "react-native-splash-screen-mask")

![react-native-splash-screen-mask](./react-native-splash-screen-mask.png "react-native-splash-screen-mask")

## Installation

`$ npm install react-native-splash-screen-mask --save`

## Usage

Use like so:

```javascript
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
```

## Props

| props | Type | Optional | Default | Description |
|--------|--------|--------|--------|--------|
| imageSource | any | no |  | The image (png, jpg, jpeg) splash screen |
| navigationAction | any | no |  | Redirect callback function (can be used `react-native-router-flux` or anything else).  |
| backgroundStyle | any | yes | `{ backgroundColor: '#fff' }` | The style of splash screen background. |
| duration | number | yes | 5000 (5 seconds) | Duration for loading the splash screen. |

## Wrap Up

If you think any of the `react-native-splash-screen-mask` can be improved, please do open a PR with any updates and submit any issues. Also, I will continue to improve this, so you might want to watch/star this repository to revisit.

## Contribution

We'd love to have your helping hand on contributions to `react-native-splash-screen-mask` by forking and sending a pull request!

Your contributions are heartily ♡ welcome, recognized and appreciated. (✿◠‿◠)

How to contribute:

- Open pull request with improvements
- Discuss ideas in issues
- Spread the word
- Reach out with any feedback

## License

The MIT License [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
