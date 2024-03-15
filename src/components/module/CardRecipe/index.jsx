import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import SvgStar from '../../base/Svg/star'

const CardRecipe = ({ navigation, item }) => {
  return (
    <TouchableOpacity style={{ flexDirection: 'row', gap: 20, marginBottom:20 }}
      onPress={ () => navigation.navigate('DetailRecipe', {id: item.id}) }>
      <Image
        source={{ uri: item.image }}
        style={{ width:64, height:64, borderRadius:16 }}
      />

      <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
        <Text style={{ fontWeight: 'bold', color: 'black' }}>{item.title}</Text>
        <View style={{ display: 'flex', flexDirection: 'row', alignItems:'center', gap:5 }}>
          {/* <SvgStar />
          <Text>4.6</Text> */}
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default CardRecipe
