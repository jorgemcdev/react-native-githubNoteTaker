import React, { PropTypes } from 'react';

import { View, Image, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#48BBEC',
    paddingBottom: 10
  },
  name: {
    alignSelf: 'center',
    fontSize: 21,
    marginTop: 10,
    marginBottom: 5,
    color: 'white'
  },
  handle: {
    alignSelf: 'center',
    fontSize: 16,
    color: 'white'
  },
  image: {
    height: 125,
    width: 125,
    borderRadius: 65,
    marginTop: 10,
    alignSelf: 'center'
  }
});

const Badge = (props) => (
  <View style={styles.container}>
    <Image style={styles.image} source={{ uri: props.userInfo.avatar_url }} />
    <Text style={styles.name}> {props.userInfo.name} </Text>
    <Text style={styles.handle}> {props.userInfo.login} </Text>
  </View>
);

Badge.propTypes = {
  userInfo: PropTypes.object.isRequired
};

export default Badge;
