import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View} from 'react-native';

export default class ContactsScreen extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.information}>Contacts</Text>
        <View style={styles.underline}/>
        <Text style={styles.searchItem}>Jane Doe</Text>
        <View style={styles.underline}/>
        <Text style={styles.searchItem}>John Doe</Text>
        <View style={styles.underline}/>
        <Text style={styles.searchItem}>Jay Doe</Text>
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

  searchItem: {
    fontSize: 20,
    marginBottom: 10,
  },

  underline: {
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
    marginRight:30,
    marginBottom: 30,
  },
});
