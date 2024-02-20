/* eslint-disable indent */
import React from 'react'
import { View, Text, Image } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
const image1 = require('../../../assets/img/category/recipe1.png')
const image2 = require('../../../assets/img/category/recipe2.png')
const image3 = require('../../../assets/img/category/recipe3.png')
const image4 = require('../../../assets/img/category/recipe4.png')
const image5 = require('../../../assets/img/category/recipe5.png')

const Index = ({ image, title, user, category, saved, liked}) => {
  let img
  switch (image) {
    case 1: img = image1; break
    case 2: img = image2; break
    case 3: img = image3; break
    case 4: img = image4; break
    case 5: img = image5; break
    default: img = image1
  }
  let savedColor = '#EFC81A', savedBgColor = 'white'
  let likedColor = '#EFC81A', likedBgColor = 'white'

  if (saved) {
    savedColor = 'white'
    savedBgColor = '#EFC81A'
  }

  if (liked) {
    likedColor = 'white'
    likedBgColor = '#EFC81A'
  }

  return (
    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 30 }}>
      <View style={{ display: 'flex', flexDirection: 'row', gap: 15 }}>
        <Image
          width={80}
          height={80}
          source={img}
          style={{ borderRadius: 16 }}
        />
        <View style={{ display: 'flex' }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 3 }}>{title}</Text>
          <Text style={{ fontSize: 12, marginBottom: 7 }}>In {user}</Text>
          <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{category}</Text>
        </View>
      </View>

      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 15 }}>
        <Feather name="bookmark" style={{ color: savedColor, backgroundColor: savedBgColor, height: 36, fontSize: 25, padding: 5, borderRadius: 16}}/>
        <Feather name="thumbs-up" style={{ color: likedColor, backgroundColor: likedBgColor, height: 36, fontSize: 25, padding: 5, borderRadius: 16}}/>
      </View>
    </View>
  )
}

export default Index
