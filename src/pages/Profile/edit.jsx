import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'

const Edit = ({ navigation }) => {
  const [response, setResponse] = React.useState(null)
  const option = {
    mediaType: 'photo',
    maxHeight: 2000,
    maxWidth: 2000,
  }

  const galleryLaunch = () => {
    launchImageLibrary(option, (res) => {
      if (res.didCancel) {
        // console.log('User cancel Image')
      } else if (res.errorMessage) {
        // console.log('Image Picker Error')
      } else {
        const data = res.assets[0]
        setResponse(data)
      }
    })
  }

  const cameraLaunch = () => {
    const optionCamera = {
      ...option,
      saveToPhotos: true,
    }
    launchCamera(optionCamera, (res) => {
      if (res.didCancel) {
        // console.log('User cancel Image')
      } else if (res.errorMessage) {
        // console.log('Image Picker Error')
      } else {
        const data = res.assets[0]
        setResponse(data)
      }
    })

  }

  const submitImage = () => {

  }

  return (
    <>
      <View style={{ marginHorizontal: 20 }}>
        <TouchableOpacity style={{ borderBottomWidth: 1, marginTop: 20, borderColor: '#cccccc' }}>
          <Text style={{ marginBottom: 5 }}>Change Profile Picture</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{borderBottomWidth: 1, marginTop: 10, borderColor: '#cccccc' }}>
          <Text style={{ marginBottom: 5 }}>Change Password</Text>
        </TouchableOpacity>
      </View>

      { response &&
        <View style={{ display: 'flex', alignItems: 'center', marginTop: 200, gap: 20 }}>
          <Image
            style={{ width: 200, height: 200 }}
            resizeMode="cover"
            source={{ uri: response.uri }}
          />
          <TouchableOpacity style={{ backgroundColor: '#E7E7E7', borderRadius: 15, width: 200 }}
            onPress={() => submitImage()} >
            <Text style={{ textAlign: 'center', lineHeight: 35, fontWeight: 'bold' }}>Update Image !</Text>
          </TouchableOpacity>
        </View>
      }

      <View style={{ position: 'absolute',left: 0, right: 0, bottom: 80, alignItems: 'center' }}>
        <View style={{ display: 'flex', backgroundColor: '#E7E7E7', borderRadius: 15, width: 200 }}>

          <TouchableOpacity style={{ height: 40, borderBottomWidth: 1, borderColor: 'white' }}
            onPress={() => galleryLaunch()}>
            <Text style={{ textAlign: 'center', lineHeight: 35 }}>Photo Library</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ height: 40 }}
            onPress={() => cameraLaunch()}>
            <Text style={{ textAlign: 'center', lineHeight: 35 }}>Take Photo</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ position: 'absolute',left: 0, right: 0, bottom: 30, alignItems: 'center' }}>
        <TouchableOpacity style={{ backgroundColor: '#E7E7E7', borderRadius: 15, width: 200  }} >
          <Text style={{ textAlign: 'center', lineHeight: 35, fontWeight: 'bold' }}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

export default Edit
