
# react-native-splash-screen-mask

## Getting started

`$ npm install react-native-splash-screen-mask --save`

### Mostly automatic installation

`$ react-native link react-native-splash-screen-mask`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-splash-screen-mask` and add `RNSplashScreenMask.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNSplashScreenMask.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNSplashScreenMaskPackage;` to the imports at the top of the file
  - Add `new RNSplashScreenMaskPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-splash-screen-mask'
  	project(':react-native-splash-screen-mask').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-splash-screen-mask/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-splash-screen-mask')
  	```

#### Windows
[Read it! :D](https://github.com/ReactWindows/react-native)

1. In Visual Studio add the `RNSplashScreenMask.sln` in `node_modules/react-native-splash-screen-mask/windows/RNSplashScreenMask.sln` folder to their solution, reference from their app.
2. Open up your `MainPage.cs` app
  - Add `using Splash.Screen.Mask.RNSplashScreenMask;` to the usings at the top of the file
  - Add `new RNSplashScreenMaskPackage()` to the `List<IReactPackage>` returned by the `Packages` method


## Usage
```javascript
import RNSplashScreenMask from 'react-native-splash-screen-mask';

// TODO: What to do with the module?
RNSplashScreenMask;
```
  