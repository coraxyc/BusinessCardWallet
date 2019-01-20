import React from 'react';
import { Alert, AppRegistry, Button, Platform, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; 

//This is the home screen
class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            onPress= {() => {Alert.alert('You tapped the button!')}}
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

//This is the myCard screen
class MyCardScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>My Card</Text>
      </View>
    );
  }
}

//This defines names for the screens
const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    MyCard: MyCardScreen,
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

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
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

