import React, { PropTypes } from 'react';

import {
  ScrollView,
  Text,
  View,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

import Badge from './badge';
import Separator from './helpers/separator';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowContainer: {
    padding: 10
  },
  name: {
    color: '#48BBEC',
    fontSize: 18,
    paddingBottom: 5
  },
  stars: {
    color: '#48BBEC',
    fontSize: 14,
    paddingBottom: 5
  },
  description: {
    fontSize: 14,
    paddingBottom: 5
  }
});

const Repositories = (props) => {
  const repos = props.data.repos;
  const list = repos.map((item, index) => {
    const desc = repos[index].description ? <Text style={styles.description}>{repos[index].description} </Text> : <View />;
    return (
      <View key={index}>
        <View style={styles.rowContainer}>
          <TouchableHighlight>
            <Text style={styles.name}>{repos[index].name}</Text>
          </TouchableHighlight>
          <Text style={styles.stars}> Stars: {repos[index].stargazers_count} </Text>
          {desc}
        </View>
        <Separator />
      </View>
    );
  });

  return (
    <ScrollView style={styles.container}>
      <Badge userInfo={props.data.userInfo} />
      {list}
    </ScrollView>
  );
};

Repositories.propTypes = {
  repos: PropTypes.object,
  userInfo: PropTypes.array
};

export default Repositories;
