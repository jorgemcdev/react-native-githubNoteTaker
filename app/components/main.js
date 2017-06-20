import React, { Component, PropTypes } from 'react';
import {
  ActivityIndicator,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

import api from '../utils/api';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#48BBEC'
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
    color: '#fff'
  },
  error: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
    color: 'red'
  },
  searchInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  }
});

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      isLoading: false,
      error: false
    };
  }

  handleSubmit() {
    // update our indicatorIOS spinner
    this.setState({
      isLoading: true
    });
    api.getBio(this.state.username)
      .then((res) => {
        if (res.message === 'Not Found') {
          this.setState({
            error: 'User not found',
            isLoading: false
          });
        } else {
          this.props.navigator.push({
            title: res.name || 'Select an Option',
            id: 'Dashboard',
            data: { userInfo: res }
          });
          this.setState({
            isLoading: false,
            error: false,
            username: ''
          });
        }
      });
  }

  handleChange(event) {
    this.setState({
      username: event.nativeEvent.text
    });
  }

  render() {
    const showErr = (
      this.state.error ? <Text style={styles.error}> {this.state.error} </Text> : <View />
    );
    return (
      <View style={styles.mainContainer}>
        {showErr}
        <Text style={styles.title}> Search for a Github User </Text>
        <TextInput
          style={styles.searchInput}
          value={this.state.username}
          onChange={this.handleChange.bind(this)}
        />

        <TouchableHighlight
          style={styles.button}
          onPress={this.handleSubmit.bind(this)}
          underlayColor="white"
        >
          <Text style={styles.buttonText}> SEARCH </Text>
        </TouchableHighlight>

        <ActivityIndicator
          animating={this.state.isLoading}
          style={[styles.centering, { height: 80 }]}
          size="large"
        />
      </View>
    );
  }
}

Main.propTypes = {
  title: PropTypes.string,
  navigator: PropTypes.object
};

export default Main;
