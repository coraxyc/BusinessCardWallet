import React from 'react';
import { Alert, AppRegistry, Button, Platform, StyleSheet, Text,
  TouchableOpacity, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import styles from './constants/Styles.js'
import MyCardScreen from './screens/MyCardScreen.js'
import CameraScreen from './screens/CameraScreen.js'
//This is the home screen
class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => this.props.navigation.navigate('Camera')}
            title="New Business Card"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => this.props.navigation.navigate('MyCard')}
            title="My Business Card"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress= {() => {Alert.alert('You tapped the button!')}}
            title="Contacts"
          />
        </View>
      </View>
    );
  }
}

//This defines names for the screens
const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    MyCard: MyCardScreen,
    Camera: CameraScreen
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
