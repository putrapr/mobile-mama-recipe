import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, ImageBackground, FlatList, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import CardRecipe from '../../components/module/CardRecipe'
import api from '../../config/api'

const Home = ({ navigation }) => {
  // State
  const [newRecipes, setNewRecipes] = useState([])
  const [recipes, setRecipes] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [params, setParams] = useState({
    page: 1,
    limit: 5,
    sort: 'id',
    sortBy: 'asc',
  })
  const [search, setSearch] = useState('')


  // Function
  const getNewRecipes = async () => {
    const params2 = {
      fieldSort: 'id',
      sortBy: 'desc',
      limit: 5,
    }
    try {
      const result = await api.get('/recipes', {params:params2})
      setNewRecipes(result.data.data)
    } catch (err) {
      console.log(err.message)
    }
  }

  const getRecipes = async () => {
    setIsLoading(true)
    try {
      const result = await api.get('/recipes-pagination', { params })
      setIsLoading(false)
      const data = result.data.data
      setRecipes(current => [...current, ...data])
    } catch (err) {
      setIsLoading(false)
      console.log(err)
    }
  }

  const renderLoader = () => {
    return (
      isLoading && (
        <View style={{ marginVertical: 16, alignItems: 'center' }}>
          <ActivityIndicator size="large" color="blue" />
        </View>
      )
    )
  }

  const loadMoreItem = () => {
    setParams(current => ({...current, page: current.page + 1}))
  }

  const searchRecipe = async () => {
    const result = await api.get('/recipe-search', { params: { 'keyword': search }})
    setRecipes(result.data.data)
  }

  // Hooks
  useEffect(() => {
    getNewRecipes()
  },[])

  useEffect(() => {
    if (search !== '') searchRecipe()
    else getRecipes()
  }, [params, search])

  return (
    <>
      <View style={s.search}>
        <TextInput
          style={s.input}
          placeholder="Search Pasta, Bread, etc"
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
            newRecipes.map( (item) =>
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

        <FlatList
          data={recipes}
          renderItem={({item, index}) => (
            <CardRecipe navigation={navigation} item={item} />
          )}
          keyExtractor={item => item.id}
          ListFooterComponent={renderLoader}
          onEndReached={loadMoreItem}
          onEndReachedThreshold={0}
        />
      </View>
    </>
  )
}

export default Home

const s = StyleSheet.create({
  search: {
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
