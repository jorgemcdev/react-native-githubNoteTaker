import React, { PropTypes } from 'react';

import { View, Text, StyleSheet, ScrollView } from 'react-native';

import Badge from './badge';
import Separator from './helpers/separator';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttonText: {
    fontSize: 18,
    alignSelf: 'center'
  },
  rowContainer: {
    padding: 10
  },
  rowTitle: {
    color: '#48BBEC',
    fontSize: 16
  },
  rowContent: {
    fontSize: 19
  }
});

const Profile = (props) => {
  const getRowTitle = (user, item) => {
    item = (item === 'public_repos') ? item.replace('_', ' ') : item;
    return item[0] ? item[0].toUpperCase() + item.slice(1) : item;
  };

  const userInfo = props.data.userInfo;
  const topicArr = [
    'company', 'location', 'followers',
    'following', 'email', 'bio', 'public_repos'
  ];
  let list = topicArr.map((item, index) => {
    if (!userInfo[item]) {
      return <View key={index} />;
    } else {
      return (
        <View key={index}>
          <View style={styles.rowContainer}>
            <Text style={styles.rowTitle}> {getRowTitle(userInfo, item)} </Text>
            <Text style={styles.rowContent}> {userInfo[item]} </Text>
          </View>
          <Separator />
        </View>
      );
    }
  });

  return (
    <ScrollView style={styles.container}>
      <Badge userInfo={props.data.userInfo} />
      {list}
    </ScrollView>
  );
};

Profile.propTypes = {
  data: PropTypes.object
};

export default Profile;
