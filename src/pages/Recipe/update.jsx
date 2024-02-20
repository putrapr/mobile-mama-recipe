import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, Alert, ScrollView} from 'react-native'
import Button from 'react-native-button'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Update = ({ navigation, route }) => {
  const { pId, pUserId, pTitle, pIngredient, pImage, pVideoLink } = route.params
  const [title, setTitle] = useState(pTitle)
  const [ingredient, setIngredient] = useState(pIngredient)
  const [videoLink, setVideoLink] = useState(pVideoLink)
  const [response, setResponse] = useState(null)

  const galleryLaunch = () => {
    launchImageLibrary({
      saveToPhotos: true,
      mediaType: 'mixed',
      includeBase64: false,
    }, (res) => {
      // console.log('response camera = ', res);
      if (res.didCancel) {
        // console.log('User cancel Image');
      } else if (res.errorMessage) {
        // console.log('Image Picker Error');
      } else {
        const data = res.assets[0]
        setResponse(data)
        // console.log(setResponse);
      }
    })
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
    let image
    (response) ?
      image = {
        uri: response?.uri ?? '',
        type: response?.type ?? '',
        name: response?.fileName ?? '',
        fileSize: response?.fileSize ?? '',
      } : image = null

    const data = {
      user_id: pUserId,
      title,
      ingredient,
      image,
      videoLink,
    }

    const formData = new FormData()
    formData.append('user_id', data?.user_id)
    formData.append('title', data?.title)
    formData.append('ingredient', data?.ingredient)
    formData.append('image', data?.image)
    formData.append('video_link', data?.videoLink)

    axios.put(process.env.BACKEND_URL + '/recipe/' + pId, formData, {
      headers: {
        // Authorization: token,
        'Content-Type': 'multipart/form-data',
      }})
      .then((res) => {
        console.log(res)

        Alert.alert(
          'Status',
          'Update Recipe Success',
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
        <Text style={ s.title }>Update Your Recipe</Text>
        <TextInput
          style={s.input}
          onChangeText={setTitle}
          value={title}
          placeholder="Title"
        />

        <TextInput
          editable
          multiline
          numberOfLines={10}
          onChangeText={text => setIngredient(text)}
          value={ingredient}
          placeholder="Ingredient"
          style={{textAlignVertical: 'top', backgroundColor: 'white', borderRadius: 10, width: '100%', paddingVertical: 20, paddingHorizontal: 40}}
        />

        <TouchableOpacity
          style={{ height: 60, width: '100%', backgroundColor: 'white', borderRadius: 10, paddingVertical: 20, paddingHorizontal: 40, margin:12}}
          onPress={() => galleryLaunch()}>
          <Text style={{ color: '#ababab' }}>Change Image</Text>
        </TouchableOpacity>

        <View style={{ marginTop:10 }}>
          <Image
            style={{ width: 120, height: 120 }}
            resizeMode="cover"
            source={
              (response) ? { uri: response.uri } : { uri: pImage }
            }
          />
        </View>

        <TextInput
          style={s.input}
          onChangeText={setVideoLink}
          value={videoLink}
          placeholder="Video link"
        />

        <Button
          style={{ height: 60, width: 200, borderRadius: 10, backgroundColor: '#EFC81A', color: 'white', paddingTop:17, marginVertical: 50  }}
          onPress={() => handleSubmit()}>
          UPDATE
        </Button>

      </View>
    </ScrollView>
  )
}

export default Update

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
