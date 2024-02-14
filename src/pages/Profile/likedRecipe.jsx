import { Button, View, Text, Image } from 'react-native'
import React from 'react'

const LikedRecipe = ({ navigation }) => {
  return (
    <View>
      {/* Card */}
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 30, marginHorizontal: 20, gap: 10, backgroundColor: '#FAF7ED', padding: 10 }}>
        <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
          <Image
            width={80}
            height={80}
            source={require('../../assets/img/profile/recipe1.png')}
            style={{ borderRadius: 16 }}
          />
          <View style={{ display: 'flex' }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 3 }}>Margherita</Text>
            <Text style={{ fontSize: 12, marginBottom: 7 }}>In Veg Pizza</Text>
            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Spicy</Text>
          </View>
        </View>
        <View>
          <Button
            title="Unliked"
            color="#ff3a43"
          />
        </View>
      </View>

      {/* Card */}
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 30, marginHorizontal: 20, gap: 10, backgroundColor: '#FAF7ED', padding: 10 }}>
        <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
          <Image
            width={80}
            height={80}
            source={require('../../assets/img/profile/recipe2.png')}
            style={{ borderRadius: 16 }}
          />
          <View style={{ display: 'flex' }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 3 }}>Veg Loaded</Text>
            <Text style={{ fontSize: 12, marginBottom: 7 }}>In Pizza Mania</Text>
            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Spicy</Text>
          </View>
        </View>
        <View>
          <Button
            title="Unliked"
            color="#ff3a43"
          />
        </View>
      </View>
    </View>
  )
}

export default LikedRecipe
