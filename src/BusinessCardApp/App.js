import React, { Component } from 'react';
import { Alert, AppRegistry, Button, Platform, StyleSheet, View } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";

export default class ButtonBasics extends Component {
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="New Business Card"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="My Business Card"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Contacts"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
  },
  buttonContainer: {
    backgroundColor: Platform.OS === 'ios' ? 'aliceblue' : 'white',
    borderRadius: 20,
    margin: 60,
    padding: 10
  },
});

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => ButtonBasics);
