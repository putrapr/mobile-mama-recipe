import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native'
import Button from 'react-native-button'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useRoute } from '@react-navigation/native'

const Edit = ({ navigation }) => {
  const route = useRoute()
  const [name, setName] = useState(route.params?.name)
  const [response, setResponse] = useState(null)
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

  const submitImage = async () => {
    const id = await AsyncStorage.getItem('id')
    const formData = new FormData()
    formData.append('image', {
      uri: response.uri,
      name: response.fileName,
      filename: response.fileName,
      type: response.type,
    })

    try {
      await axios.put(process.env.BACKEND_URL + '/user-image/' + id, formData, {
        headers : {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        },
      })
      Alert.alert(
        'Success',
        'Image Updated',
      )
      navigation.navigate('Profile')
    } catch (err) {
      Alert.alert(
        'Failed',
        'Image Not Updated',
      )
    }
  }

  const submitName = async () => {
    const id = await AsyncStorage.getItem('id')
    try {
      await axios.put(process.env.BACKEND_URL + '/user-name/' + id, { name } )
      Alert.alert(
        'Success',
        'Name Updated',
      )
      navigation.navigate('Profile')
    } catch (err) {
      Alert.alert(
        'Failed',
        'Name Not Updated',
      )
    }
  }

  return (
    <>
      <View style={{ padding: 15 }}>
        {/* <TouchableOpacity style={{ borderBottomWidth: 1, marginTop: 20, borderColor: '#cccccc' }}>
          <Text style={{ marginBottom: 5 }}>Change Profile Picture</Text>
        </TouchableOpacity> */}
        <TextInput
          style={s.input}
          value={name}
          onChangeText={setName}
        />
        <Button
          style={{ height: 40, borderRadius: 10, backgroundColor: '#EFC81A', color: 'white', paddingTop:8  }}
          onPress={() => submitName()}
        >Save Name
        </Button>

        {/* <TouchableOpacity style={{borderBottomWidth: 1, marginTop: 10, borderColor: '#cccccc' }}>
          <Text style={{ marginBottom: 5 }}>Change Password</Text>
        </TouchableOpacity> */}
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

const s = StyleSheet.create({
  input: {
    height: 40,
    width: '100%',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#EFC81A',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#f7f7f7',
  },
})
