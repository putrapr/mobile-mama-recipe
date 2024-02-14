import React from 'react'
import { Button, View, Text, Image, ScrollView } from 'react-native'

const MyRecipe = ({ navigation }) => {
  const recipes = [
    {
      id:1,
      image: require('../../assets/img/default.png'),
      title: 'Classic Goulash',
      category: 'Spicy',
      ingredient: '1 Plate',
      video_link: 'www.youtube.com',
    },
  ]

  return (
    <ScrollView style={{ width: '100%'}}>
      {
        recipes.map( (recipe) =>

          <View key={recipe.id} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 30, marginHorizontal: 20, gap: 10, backgroundColor: '#FAF7ED', padding: 10 }}>
            <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
              <Image
                source={ require('../../assets/img/default.png') }
                style={{ width: 80, height: 80, borderRadius: 16 }}
              />
              <View style={{ flexBasis: 160 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 3 }}>{recipe.title}</Text>
                <Text style={{ fontSize: 12, marginBottom: 7 }}>in Putra Prasetya</Text>
                <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{recipe.category}</Text>
              </View>
            </View>

            <View style={{ gap: 10 }}>
              <Button
                title="Update"
                color="#EEC302"
                onPress={()=>
                  navigation.navigate('UpdateRecipe', {
                    pId: recipe.id,
                    pTitle: recipe.title,
                    pIngredient: recipe.ingredient,
                    pImage: recipe.image,
                    pVideoLink: recipe.video_link,
                  })
                }
              />

              <Button
                title="Delete"
                color="#ff3a43"
              />
            </View>
          </View>
        )
      }
    </ScrollView>
  )
}

export default MyRecipe
