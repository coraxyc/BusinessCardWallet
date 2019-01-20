//https://www.npmjs.com/package/react-native-cloud-vision-api
// 1. import api-key
// 2. import picture captured 
// 3. read picture
// 4. Text detection 
// 5. differentiate information 
// 6. load into contacts

import vision from "react-cloud-vision-api"
import getAPIKey from "api_key"
import React from 'react'
import { View, Text, Image, Button } from 'react-native'
import ImagePicker from 'react-native-image-picker'

var key = getAPIKey;
vision.init({key});

const rq = new vision.Request({
	image: new vision.Image({
		base64: base64Img,
	}),
	features: [
		new vision.Feature('TEXT_DETECTION')
	]
})

export default class App extends React.Component {
  state = {
    photo: null,
  }

  handleChoosePhoto = () => {
    const options = {
      noData: true,
    }
    ImagePicker.launchImageLibrary(options, response => {
      if (response.uri) {
        this.setState({ photo: response })
      }
    })
  }

  render() {
    const { photo } = this.state
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {photo && (
          <Image
            source={{ uri: photo.uri }}
            style={{ width: 300, height: 300 }}
          />
        )}
        <Button title="Choose Photo" onPress={this.handleChoosePhoto} />
      </View>
    )
  }
}

