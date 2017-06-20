import React, { Component, PropTypes } from 'react';
import {
  Text,
  View,
  Image,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

import api from '../utils/api';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    height: 270
  },
  buttonText: {
    fontSize: 24,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1
  }
});

class Dashboard extends Component {
  makeBackground(btn) {
    const obj = {
      flexDirection: 'row',
      alignSelf: 'stretch',
      justifyContent: 'center',
      flex: 1
    };
    if (btn === 0) {
      obj.backgroundColor = '#48BBEC';
    } else if (btn === 1) {
      obj.backgroundColor = '#E77AAE';
    } else {
      obj.backgroundColor = '#758BF4';
    }
    return obj;
  }

  goToProfile() {
    this.props.navigator.push({
      id: 'Profile',
      data: { userInfo: this.props.data.userInfo }
    });
  }

  goToRepos2() {
    this.props.navigator.push({
      id: 'Repositories',
      data: { userInfo: this.props.data.userInfo }
    });
  }

  goToRepos() {
    api.getRepos(this.props.data.userInfo.login)
      .then((res) => {
        this.props.navigator.push({
          id: 'Repositories',
          data: {
            userInfo: this.props.data.userInfo,
            repos: res
          }
        });
      });
  }

  goToNotes() {
    // console.log('Going to Notes');
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={{ uri: this.props.data.userInfo.avatar_url }} style={styles.image} />
        <TouchableHighlight
          style={this.makeBackground(0)}
          onPress={this.goToProfile.bind(this)}
          underlayColor="#88D4F5"
        >
          <Text style={styles.buttonText}>View Profile</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={this.makeBackground(1)}
          onPress={this.goToRepos.bind(this)}
          underlayColor="#E39EBF"
        >
          <Text style={styles.buttonText}>View Repositories</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={this.makeBackground(2)}
          onPress={this.goToNotes.bind(this)}
          underlayColor="#9BAAF3"
        >
          <Text style={styles.buttonText}>Take Notes</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

Dashboard.propTypes = {
  data: PropTypes.object.isRequired,
  navigator: PropTypes.object.isRequired
};

export default Dashboard;
