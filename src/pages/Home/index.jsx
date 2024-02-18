/* eslint-disable jsx-quotes */
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import SvgPasta from '../../components/base/Svg/pasta'
import SvgKorean from '../../components/base/Svg/korean'
import SvgSeafood from '../../components/base/Svg/seafood'
import SvgStar from '../../components/base/Svg/star'
import api from '../../config/api'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Home = ({ navigation }) => {
  const [search, setSearch] = React.useState()
  const [recipes, setRecipes] = React.useState([])

  const getData = async () => {
    try {
      const result = await api.get('/recipes')
      setRecipes(result.data.data)
      const token = await AsyncStorage.getItem('token')
      // console.log('my token: ' + token)
    } catch (err) {
      console.log(err.message)
    }
  }

  React.useEffect(() => {
    getData()
  },[])

  return (
    <>
      <View style={s.container}>
        <TextInput
          style={s.input}
          placeholder='Search Pasta, Bread, etc'
          onChangeText={setSearch}
          value={search}
        />
      </View>

      <View style={{ paddingLeft: 30, marginTop: 20 }}>
        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20, marginBottom: 20 }}>
          New Recipes
        </Text>

        <ScrollView horizontal>
          {
            recipes.map( (item) =>
              <TouchableOpacity key={item.id}
                onPress={ () =>
                  navigation.navigate('DetailRecipe', {
                    id: item.id,
                  })
                }
              >
                <ImageBackground
                  style={ s.image }
                  source={{ uri: item.image }}
                  resizeMode="cover"
                  key={'img' + item.id}>
                  <View style={{ backgroundColor: '#000000c0', marginBottom:15, width: '100%' }}>
                    <Text style={ s.text } key={item.id}>{item.title}</Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            )
          }
        </ScrollView>

        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20, marginVertical: 30 }}>
          Popular Recipes
        </Text>

        <View>
          <View style={{ display: 'flex', flexDirection: 'row', gap: 20, marginBottom:20 }}>
            <SvgPasta style={{ width:64, height:64, borderRadius:16}} />
            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
              <Text style={{ fontWeight: 'bold', color: 'black' }}>Orange La Pasta</Text>
              <View style={{ display: 'flex', flexDirection: 'row', alignItems:'center', gap:5 }}>
                <SvgStar />
                <Text>4.6  • </Text>
                <Text style={{ color: '#6E80B0' }}>Pasta</Text>
              </View>
            </View>
          </View>

          <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', gap: 20, marginBottom:20 }}
            onPress={ () => navigation.navigate('Category') }
          >
            <SvgKorean style={{ width:64, height:64, borderRadius:16}} />
            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
              <Text style={{ fontWeight: 'bold', color: 'black' }}>Spicy Ramenyu</Text>
              <View style={{ display: 'flex', flexDirection: 'row', alignItems:'center', gap:5 }}>
                <SvgStar />
                <Text>4.6  • </Text>
                <Text style={{ color: '#6E80B0' }}>Korean</Text>
              </View>
            </View>
          </TouchableOpacity>

          <View style={{ display: 'flex', flexDirection: 'row', gap: 20, marginBottom:20 }}>
            <SvgSeafood style={{ width:64, height:64, borderRadius:16}} />
            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
              <Text style={{ fontWeight: 'bold', color: 'black' }}>Lobster Toast</Text>
              <View style={{ display: 'flex', flexDirection: 'row', alignItems:'center', gap:5 }}>
                <SvgStar />
                <Text>4.6  • </Text>
                <Text style={{ color: '#6E80B0' }}>Seafood</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </>
  )
}

export default Home

const s = StyleSheet.create({
  container: {
    display:'flex',
    alignItems: 'center',
    paddingTop: 10,
    paddingHorizontal: 30,
  },

  input: {
    height: 60,
    width: '100%',
    margin: 12,
    borderWidth: 1,
    backgroundColor: '#EFEFEF',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 40,
  },

  image: {
    width: 130,
    height: 160,
    marginRight: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    overflow: 'hidden',
    borderRadius: 15,
  },

  text: {
    fontSize:14,
    color: 'white',
    marginHorizontal:15,
    textAlign: 'center',
  },
})

