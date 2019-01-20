import React from 'react';
import { View, Text } from 'react-native';

import styles from '../constants/Styles.js'
//This is the myCard screen
export default class MyCardScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>My Card</Text>
      </View>
    );
  }
}
