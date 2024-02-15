import React, { useState, useCallback } from 'react'
import { View, Text, ScrollView, Image, Alert } from 'react-native'
import YoutubePlayer from 'react-native-youtube-iframe'
// import Feather from 'react-native-vector-icons/Feather'

const Video = () => {
  const [playing, setPlaying] = useState(false)

  const onStateChange = useCallback((state) => {
    if (state === 'ended') {
      setPlaying(false)
      Alert.alert('video has finished playing!')
    }
  }, [])
  return (
    <View>
      <YoutubePlayer
        height={300}
        play={playing}
        videoId={'Yi3vrsTEHoA'}
        onChangeState={onStateChange}
      />
      <View style={{ marginHorizontal: 20, height: '100%' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000000', marginTop: -65 }}>Beef Birria Tacos</Text>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <Text>Nicole McLaughlin</Text>
          <Text style={{ fontSize: 14, color: '#AAAAAA', marginLeft: 5 }}>- 3 month ago</Text>
        </View>

        <Text style={{ fontSize: 16, marginTop: 30, marginBottom: 10}}>Another video recipe : </Text>

        <ScrollView style={{ height: 200 }}>
          <View style={{ marginBottom: 20 }}>
            <View style={{ backgroundColor: 'blue', width: 250, borderRadius: 5 }}>
              <Image source={require('../../assets/img/video/Classic_Goulash.jpg')} style={{ width: 250, height: 140, borderRadius: 5 }} />
            </View>

            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000000', marginTop: 10 }}>Classic Goulash</Text>
            <View style={{ display: 'flex', flexDirection: 'row'}}>
              <Text style={{ fontSize: 12 }}>Nicole McLaughlin</Text>
              <Text style={{ fontSize: 12, color: '#AAAAAA', marginLeft: 5 }}>- 2 month ago</Text>
            </View>
          </View>

          <View style={{ marginBottom: 20 }}>
            <Image source={require('../../assets/img/video/Ice_Cream_Cake.jpg')} style={{ width: 250, height: 140, borderRadius: 5 }} />
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000000', marginTop: 10 }}>Ice Cream Cake</Text>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <Text style={{ fontSize: 12 }}>Nicole McLaughlin</Text>
              <Text style={{ fontSize: 12, color: '#AAAAAA', marginLeft: 5 }}>- 1 month ago</Text>
            </View>
          </View>

          <View style={{ marginBottom: 20 }}>
            <Image source={require('../../assets/img/video/Cobb_Salad.jpg')} style={{ width: 250, height: 140, borderRadius: 5 }} />
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000000', marginTop: 10 }}>Cobb Salad</Text>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <Text style={{ fontSize: 12 }}>Nicole McLaughlin</Text>
              <Text style={{ fontSize: 12, color: '#AAAAAA', marginLeft: 5 }}>- 1 month ago</Text>
            </View>
          </View>

        </ScrollView>
      </View>
    </View>
  )
}

export default Video

