import React from 'react';
import { Alert, AppRegistry, Button, Platform, StyleSheet, Text,
  TouchableOpacity, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import styles from './constants/Styles.js'
import MyCardScreen from './screens/MyCardScreen.js'
import CameraScreen from './screens/CameraScreen.js'
import ContactsScreen from './screens/ContactsScreen.js'
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
            onPress={() => {this.props.navigation.navigate('MyCard', {
                titleText: "My Card",
                nameText: "Jane Doe",
                occupationText: "Analyst",
                companyText: "ABC Inc.",
                phoneNumberText: "123-456-7890",
                emailText: "jdoe@abc.xyz",
              });
            }}
            title="My Business Card"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => this.props.navigation.navigate('Contacts')}
            title="Contacts"
          />
        </View>
      </View>
    );
  }
}

const myCardInfo = {
  titleText: "My Card",
  nameText: "Jane Doe",
  occupationText: "Analyst",
  companyText: "ABC Inc.",
  phoneNumberText: "123-456-7890",
  emailText: "jdoe@abc.xyz",
}

//This defines names for the screens
const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    MyCard: MyCardScreen,
    Camera: CameraScreen,
    Contacts: ContactsScreen,
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
