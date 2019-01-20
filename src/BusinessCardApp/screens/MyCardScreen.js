import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// import styles from '../constants/Styles.js'
//This is the myCard screen
export default class MyCardScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titleText: "My Card",
      nameText: "Jane Doe",
      occupationText: "Analyst",
      companyText: "ABC Inc.",
      phoneNumberText: "123-456-7890",
      emailText: "jdoe@abc.xyz"
    };
  }

  render() {
    return (
      <View style={styles.information}>
        <Text style={styles.titleText}>{this.state.titleText}</Text>
        <View>
          <Text style={styles.fieldTitle}>Name</Text>
          <Text style={styles.fieldBody}>{this.state.nameText}</Text>
        </View>
        <View>
          <Text style={styles.fieldTitle}>Occupation</Text>
          <Text style={styles.fieldBody}>{this.state.occupationText}</Text>
        </View>
        <View>
          <Text style={styles.fieldTitle}>Company</Text>
          <Text style={styles.fieldBody}>{this.state.companyText}</Text>
        </View>
        <View>
          <Text style={styles.fieldTitle}>Phone number</Text>
          <Text style={styles.fieldBody}>{this.state.phoneNumberText}</Text>
        </View>
        <View>
          <Text style={styles.fieldTitle}>Email</Text>
          <Text style={styles.fieldBody}>{this.state.emailText}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  information: {
    paddingLeft: 30,
    paddingTop: 30,
  },

  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  fieldTitle: {
    fontSize: 20,
  },
  fieldBody: {
    fontSize: 25,
    marginBottom: 20,
  },
});
