import React from 'react';
import { Alert, AppRegistry, Button, Platform, StyleSheet, Text,
  TouchableOpacity, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Camera, Permissions } from 'expo';

import MyCardScreen from './MyCardScreen.js'
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

class CameraScreen extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera style={{ flex: 1 }} type={this.state.type}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={{
                  flex: 0.1,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={() => {
                  this.setState({
                    type: this.state.type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back,
                  });
                }}>
                <Text
                  style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                  {' '}Flip{' '}
                </Text>
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      );
    }
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
