import React, { useState, useEffect } from 'react'
import { Button, View, Text, Image, ScrollView, Alert } from 'react-native'
// import CardRecipe from '../../components/module/CardRecipe'
import api from '../../config/api'

const MyRecipe = ({ navigation }) => {
  const [recipes, setRecipes] = useState([])

  const getData = async () => {
    try {
      const result = await api.get('/recipe-user')
      setRecipes(result.data.data)
    } catch (err) {
      console.log(err.message)
    }
  }

  useEffect(() => {
    getData()
  },[])

  function handleDelete(id){
    Alert.alert(
      'Confirm Dialog',
      'Are you sure to delete?',
      [
        {
          text: 'NO',
          style: 'cancel',
        },
        {
          text: 'YES',
          onPress: async () => {
            try {
              const res = await api.delete('/recipe/' + id)
              if (res){
                Alert.alert(
                  'Status',
                  'Delete Recipe Success'
                )
                getData()
              }
            } catch (err) {
              Alert.alert(
                'Status',
                'Failed Delete Recipe'
              )
            }
          },
        },
      ],
    )
  }

  return (
    <ScrollView style={{ width: '100%', marginBottom: 30}}>
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
                {/* <Text style={{ fontSize: 12, marginBottom: 7 }}>in Putra Prasetya</Text> */}
                {/* <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Spicy</Text> */}
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
                onPress={() => handleDelete(recipe.id)}
              />
            </View>
          </View>
        )
      }
    </ScrollView>
  )
}

export default MyRecipe
