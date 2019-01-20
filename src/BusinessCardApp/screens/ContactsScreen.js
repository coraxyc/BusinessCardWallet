import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View} from 'react-native';

export default class ContactsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.information}>Contacts</Text>
        <Text style={styles.search}> Search ... </Text>
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
  container: {
    paddingLeft: 30,
    paddingTop: 30,
  },

  search: {
    paddingLeft: 30,
    paddingTop: 10,
    paddingBottom: 10,
    marginRight: 30,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'lightgrey',
    color: 'lightgrey',
    fontSize: 20,
    marginBottom: 30,
  },

  information: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
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
