import React, { Component } from 'react';
import {
  View,
  Navigator,
  StyleSheet,
  ToolbarAndroid,
  BackAndroid
} from 'react-native';

import Main from './components/main.js';
import Dashboard from './components/dashboard.js';
import Profile from './components/profile.js';
import Repositories from './components/repositories.js';

const styles = StyleSheet.create({
  toolbar: {
    height: 56,
    backgroundColor: '#e9eaed',
  },
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  }
});

let _navigator;
BackAndroid.addEventListener('hardwareBackPress', () => {
  if (_navigator && _navigator.getCurrentRoutes().length > 1) {
    _navigator.pop();
    return true;
  }
  return false;
});


class githubNotetaker extends Component {

  onActionSelected(position) {
    if (position === 0) { // index of 'Settings'
      showSettings();
    }
  }

  navigatorRenderScene(route, navigator) {
    _navigator = navigator;
    switch (route.id) {
      case 'Main':
        return (
          <View style={{flex: 1}}>
            <ToolbarAndroid
              title="Main"
              style={styles.toolbar}
            />
            <Main navigator={navigator} title="Home Page" />
          </View>
        );
      case 'Dashboard':
        return (
          <View style={{flex: 1}}>
            <ToolbarAndroid
              title="Dashboard"
              subtitle={route.data.userInfo.name}
              style={styles.toolbar}
              actions={[{title: 'Settings'}]}
              onActionSelected={this.onActionSelected}
              onIconClicked={navigator.pop}
              navIcon={require('./images/back.png')}
            />
            <Dashboard navigator={navigator} title="Dashboard" data={route.data} />
          </View>
        );
        case 'Profile':
          return (
            <View style={{flex: 1}}>
              <ToolbarAndroid
                title="Profile"
                subtitle={route.data.userInfo.name}
                style={styles.toolbar}
                actions={[{title: 'Settings'}]}
                onActionSelected={this.onActionSelected}
                onIconClicked={navigator.pop}
                navIcon={require('./images/back.png')}
              />
              <Profile navigator={navigator} title="Profile" data={route.data} />
            </View>
          );
        case 'Repositories':
          return (
            <View style={{flex: 1}}>
              <ToolbarAndroid
                title="Repos"
                subtitle={route.data.userInfo.name}
                style={styles.toolbar}
                actions={[{title: 'Settings'}]}
                onActionSelected={this.onActionSelected}
                onIconClicked={navigator.pop}
                navIcon={require('./images/back.png')}
              />
              <Repositories navigator={navigator} title="Repos" data={route.data} />
            </View>
          );
      default:
        return (
          <Main navigator={navigator} title="Home Page" />
        );
    }
  }
  render() {
    return (
      <Navigator
        initialRoute={{ id: 'Main' }}
        renderScene={this.navigatorRenderScene}
      />
    );
  }
}

export default githubNotetaker;
