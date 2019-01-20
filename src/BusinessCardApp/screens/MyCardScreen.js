import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View} from 'react-native';

// import styles from '../constants/Styles.js'
//This is the myCard screen


export default class MyCardScreen extends React.Component {
  constructor(props) {
    super(props);


  }

  render() {
    const { navigation } = this.props;
    const titleText = navigation.getParam('titleText','No title');
    const nameText = navigation.getParam('nameText', 'No name');
    const occupationText = navigation.getParam('occupationText', 'No occupation');
    const companyText = navigation.getParam('companyText', 'No company');
    const phoneNumberText = navigation.getParam('phoneNumberText', 'No phone number');
    const emailText = navigation.getParam('emailText', 'No email');

    return (
      <View style={styles.information}>
        <Text style={styles.titleText}>{titleText}</Text>
        <View>
          <Text style={styles.fieldTitle}>Name</Text>
          <TextInput
            style={styles.fieldBody}
            placeholder={nameText}
            returnKeyLabel = {"next"}
            onChangeText={(text) => this.setState({nameText:text})}
          />
          {/* TODO Make text editable */}
          <View style={styles.underline} />
        </View>
        <View>
          <Text style={styles.fieldTitle}>Occupation</Text>
          <TextInput
            style={styles.fieldBody}
            placeholder={occupationText}
            returnKeyLabel = {"next"}
            onChangeText={(text) => this.setState({occupationText:text})}
          />
          <View style={styles.underline} />
        </View>
        <View>
          <Text style={styles.fieldTitle}>Company</Text>
          <TextInput
            style={styles.fieldBody}
            placeholder={companyText}
            returnKeyLabel = {"next"}
            onChangeText={(text) => this.setState({companyText:text})}
          />
          <View style={styles.underline} />
        </View>
        <View>
          <Text style={styles.fieldTitle}>Phone number</Text>
          <TextInput
            style={styles.fieldBody}
            placeholder={phoneNumberText}
            returnKeyLabel = {"next"}
            onChangeText={(text) => this.setState({phoneNumberText:text})}
          />
          <View style={styles.underline} />
        </View>
        <View>
          <Text style={styles.fieldTitle}>Email</Text>
          <TextInput
            style={styles.fieldBody}
            placeholder={emailText}
            returnKeyLabel = {"next"}
            onChangeText={(text) => this.setState({emailText:text})}
          />
          <View style={styles.underline} />
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
    marginBottom: 10,
  },
  fieldBody: {
    fontSize: 25,
  },

  underline: {
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
    marginRight:30,
    marginBottom: 30,
  },
});
