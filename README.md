# Anime Chicago's mobile app for IOS and Android

## How to run

###1. Install react-native and dependencies
  * See (https://facebook.github.io/react-native/docs/getting-started.html#content) for official instructions.

  #### Mac
  * ```brew install node```
  * ```brew install watchman```
  * ```npm install -g react-native-cli```

  #### IDE's
  * You will need either a simulator or real phone to run the application
  * If you have a Mac the IOS simulator is built into Xcode
  * For Android studio visit (https://developer.android.com/studio/index.html) and download the version compatible with your OS
  * If you have an actual IOS or Android device plug that into your computer and make sure you have debugging mode enabled.

###2. Running the app locally

  #### Simulator or Phone
  * cd into the app
  * IOS
    * react-native run-ios (This will open the Xcode simulator automatically for you. Note: Xcode is only available on a Mac.)
    * Or plug in an IOS device and run react-native run-ios
  * Android
    * Open Android Studio
    * Click on the green play button in the top menu bar.
    * Create a new virtual device if you haven't already.
    * Choose a phone model and choose API version 23.
    * Click okay to start the simulator.
    * react-native run-android
    * Or plug in an Android device and run react-native run-android

### Running Tests
* To run Jest tests ```npm test```
* To run the kia linter ```npm run kia-lint```
