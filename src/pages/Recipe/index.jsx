/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useCallback } from 'react'
import { View, Text, ImageBackground, TouchableOpacity, ScrollView, TextInput, Alert } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import api from '../../config/api'
import YoutubePlayer from 'react-native-youtube-iframe'

const Recipe = ({ navigation, route }) => {
  const [recipe, setRecipe] = useState([])
  const [activeTab, setActiveTab] = useState('ingredient')
  const [idVideo, setIdVideo] = useState('')
  const id = route.params.id
  const [playing, setPlaying] = useState(false)

  const getData = async (pid) => {
    try {
      const result = await api.get('/recipe/' + pid)
      const dataRecipe = result.data.data
      setRecipe(dataRecipe)
      const { video_link } = dataRecipe
      const arrVideo = video_link.split('=')
      console.log(arrVideo[1])
      setIdVideo(arrVideo[1])
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getData(id)
  },[])

  const onStateChange = useCallback((state) => {
    if (state === 'ended') {
      setPlaying(false)
      Alert.alert('video has finished playing!')
    }
  }, [])

  return (
    <View>
      <ImageBackground
        source={{ uri: recipe?.image }}
        style={{ width: '100%', height: 450, borderRadius: 10, position: 'relative' }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" style={{ position: 'absolute', top: 20, left:20, fontSize: 35, color: 'black' }} />
        </TouchableOpacity>
        <Text style={{ position: 'absolute', bottom: 40, left:20, width: 250, fontSize: 35, color: 'white', backgroundColor: '#000000c0' }}>
          { recipe.title }
        </Text>
        {/* <Feather name="bookmark" style={{ position: 'absolute', bottom: 50, right:71, fontSize: 30, color: '#EFC81A', padding: 5, backgroundColor: 'white', borderRadius: 16}} onPress={() => navigation.goBack()}/>
        <Feather name="thumbs-up" style={{ position: 'absolute', bottom: 50, right:20, fontSize: 30, color: '#EFC81A', padding: 5, backgroundColor: 'white', borderRadius: 16}} onPress={() => navigation.goBack()}/> */}
      </ImageBackground>

      <View style={{ marginTop: -10, borderTopLeftRadius: 15, borderTopRightRadius: 15, backgroundColor: 'white' }}>
        <View style={{ margin: 30 }}>
          <View style={{ display: 'flex', flexDirection: 'row', gap: 20 }}>
            <TouchableOpacity onPress={() => setActiveTab('ingredient')}>
              <Text style={[ activeTab === 'ingredient' ? { fontWeight: 'bold', fontSize: 20, color: '#18172B', borderBottomWidth: 2, borderBottomColor: '#EFC81A' } : {fontWeight: 'bold', fontSize: 20} ]}>Ingredients</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setActiveTab('video')}>
              <Text style={[ activeTab === 'video' ? { fontWeight: 'bold', fontSize: 20, color: '#18172B', borderBottomWidth: 2, borderBottomColor: '#EFC81A' } : {fontWeight: 'bold', fontSize: 20} ]}>Video</Text>
            </TouchableOpacity>
          </View>

          {/* Content Tab Ingredients */}
          { activeTab === 'ingredient' &&
            <View style={{ height: 290, marginTop: 20 }}>
              <ScrollView style={{ backgroundColor: '#FAF7ED' }}>
                <Text>{ recipe.ingredient }</Text>
              </ScrollView>
            </View>
          }

          {/* Content Tab Video */}
          { activeTab === 'video' &&
            <View style={{ marginTop: 20 }}>
              <YoutubePlayer
                height={300}
                play={playing}
                videoId= {idVideo}
                onChangeState={onStateChange}
              />
            </View>

            // <ScrollView style={{ height: 290, marginTop: 20 }}>
            //   <View style={{backgroundColor: '#FAF7ED', borderRadius: 15}}>
            //     <View style={{ height: 80, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            //       <TouchableOpacity onPress={() => navigation.push('VideoRecipe')} style={{ flexBasis: 60, height: 60, backgroundColor: '#EEC302', borderRadius: 16, margin: 10 }}>
            //         <Feather name="play" style={{ fontSize: 30, color: 'white', marginLeft: 16, marginTop: 15}}/>
            //       </TouchableOpacity>
            //       <View>
            //         <Text style={{ fontSize: 20 }}> { recipe.title } </Text>
            //       </View>
            //     </View>
            //   </View>

            //   <TextInput
            //     editable
            //     multiline
            //     numberOfLines={10}
            //     maxLength={40}
            //     placeholder="Comment : "
            //     style={{textAlignVertical: 'top', backgroundColor: 'white', borderRadius: 10, width: '100%', padding: 20, borderWidth: 1, marginTop: 20}}
            //   />

            //   <TouchableOpacity style={{  backgroundColor: '#EEC302', marginTop: 20, marginBottom: 50, height: 50, borderRadius: 10, flex: 1, justifyContent: 'center', alignItems: 'center'  }}>
            //     <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>Post Comment</Text>
            //   </TouchableOpacity>
            // </ScrollView>
          }
        </View>
      </View>
    </View>
  )
}

export default Recipe
