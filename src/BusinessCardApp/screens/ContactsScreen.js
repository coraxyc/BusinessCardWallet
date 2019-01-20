import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View} from 'react-native';

export default class ContactsScreen extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.information}>Contacts</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  information: {
    paddingLeft: 30,
    paddingTop: 30,
    fontSize: 40,
    fontWeight: 'bold',
  },
});
