import React, {useState} from 'react'
import { View, Text, TextInput, StyleSheet, Image, PermissionsAndroid, TouchableOpacity, Alert, ScrollView } from 'react-native'
import Button from 'react-native-button'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker'
import api from '../../config/api'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Add = ({ navigation }) => {
  const [title, setTitle] = useState('')
  const [ingredient, setIngredient] = useState('')
  const [videoLink, setVideoLink] = useState('')
  const [response, setResponse] = useState(null)

  const galleryLaunch = () => {
    launchImageLibrary({
      saveToPhotos: true,
      mediaType: 'mixed',
      includeBase64: false,
    }, (res) => {
      // console.log('response camera = ', res)
      if (res.didCancel) {
        // console.log('User cancel Image')
      } else if (res.errorMessage) {
        // console.log('Image Picker Error')
      } else {
        const data = res.assets[0]
        // console.log(data)
        setResponse(data)
      }
    })
  }

  const getToken = async () => {
    const token = await AsyncStorage.getItem('token')
    console.log('getToken: ' + token)
    return (token) ? token : ''
  }

  const handleSubmit = async () => {
    const token = await AsyncStorage.getItem('token')
    if (!token) {
      Alert.alert(
        'Failed',
        'Please Login',
      )
      return
    }
    const data = {
      user_id: 1,
      title,
      ingredient,
      image: {
        uri: response?.uri ?? '',
        type: response?.type ?? '',
        name: response?.fileName ?? '',
        fileSize: response?.fileSize ?? '',
      },
      videoLink,
    }

    const formData = new FormData()
    formData.append('user_id', data?.user_id)
    formData.append('title', data?.title)
    formData.append('ingredient', data?.ingredient)
    formData.append('image', data?.image)
    formData.append('video_link', data?.videoLink)

    await api.post('/recipe', formData, {
      headers: {
        Authorization: token,
        'Content-Type': 'multipart/form-data',
      }}
    )
      .then((res) => {
        console.log(res)
        Alert.alert(
          'Status',
          'Add Recipe Success',
        )
        navigation.navigate('MyRecipe')
        setTitle('')
        setIngredient('')
        setResponse(null)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <ScrollView>
      <View style={s.container}>
        <Text style={ s.title }>Add Your Recipe</Text>
        <TextInput
          style={s.input}
          placeholder="Title"
          onChangeText={setTitle}
          value={title}
        />

        <TextInput style={{textAlignVertical: 'top', backgroundColor: 'white', borderRadius: 10, width: '100%', paddingVertical: 20, paddingHorizontal: 40}}
          editable
          multiline
          numberOfLines={10}
          maxLength={40}
          placeholder="Ingredient"
          onChangeText={text => setIngredient(text)}
          value={ingredient}
        />

        <TouchableOpacity style={{ height: 60, width: '100%', backgroundColor: 'white', borderRadius: 10, paddingVertical: 20, paddingHorizontal: 40, margin:12}}
          onPress={() => galleryLaunch()}>
          <Text style={{ color: '#ababab' }}>Add Image</Text>
        </TouchableOpacity>

        { response &&
          <View style={{ marginTop:10 }}>
            <Image
              style={{ width: 120, height: 120 }}
              resizeMode="cover"
              source={{ uri: response.uri }}
            />
          </View>
        }

        <TextInput
          style={s.input}
          placeholder="Youtube Video link"
          onChangeText={setVideoLink}
          value={videoLink}
        />

        <Button style={{ height: 60, width: 200, borderRadius: 10, backgroundColor: '#EFC81A', color: 'white', paddingTop:17, marginVertical: 50  }}
          onPress={() => handleSubmit()}
        >Post</Button>

      </View>
    </ScrollView>
  )
}

export default Add

const s = StyleSheet.create({
  container: {
    display:'flex',
    alignItems: 'center',
    paddingTop: 30,
    paddingHorizontal: 30,
  },

  image: {
    fontSize: 120,
    color: 'white',
    backgroundColor:'#c1c1c1',
    borderRadius:90,
    padding:30,
  },

  title: {
    marginTop: 20,
    marginBottom: 30,
    color: '#EFC81A',
    fontSize: 30,
    fontWeight: 'bold',
  },

  input: {
    height: 60,
    width: '100%',
    margin: 12,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 40,
  },

  login: {
    height: 60,
    backgroundColor: '#EFC81A',
  },
})
