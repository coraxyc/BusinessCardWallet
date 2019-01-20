import { AppRegistry, StyleSheet, Text, View, Platform } from 'react-native';

export default StyleSheet.create({
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
