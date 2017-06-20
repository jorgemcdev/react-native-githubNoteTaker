# React Native App
Android version from egghead.io tutorial Github Note Taker.

## Start App
Terminal 1
```
$ cd ProjectDir
$ react-native start
```

## Run de Emulator
Terminal 2
```
$ android avd
```

## Run App on the Emulator
Terminal 3
```
$ react-native run-android
```

## Configure Eslint

### Install Dev Dependencies
```
$ npm i -D eslint
$ npm i -D eslint-plugin-react
$ npm i -D eslint-plugin-react-native
```
### Configure
Configuration
Add plugins section and specify ESLint-plugin-React (optional) and ESLint-plugin-react-native as a plugin.

```javascript
{
  "plugins": [
    "react",
    "react-native"
  ]
}
```
If it is not already the case you must also configure ESLint to support JSX.
```javascript
{
  "ecmaFeatures": {
    "jsx": true
  }
}
```
Finally, enable all of the rules that you would like to use.
```javascript
{
  "rules": {
    "react-native/no-unused-styles": 2,
    "react-native/split-platform-components": 2,
    "react-native/no-inline-styles": 2,
    "react-native/no-color-literals": 2,
  }
}
```
## Links
https://facebook.github.io/react-native/docs/getting-started.html
https://www.npmjs.com/package/eslint-plugin-react-native
https://egghead.io
