import React from 'react'
import { View } from 'react-native'
import Card from '../../components/module/CardCategory'

const Category = () => {

  return (
    <View style={{ marginHorizontal: 20 }}>
      <Card
        image= {1}
        title= "Margherita"
        user= "Veg Pizza"
        category="Spicy"
        saved
      />

      <Card
        image= {2}
        title= "Veg Loaded"
        user= "Pizza Mania"
        category="Spicy"
        liked
      />

      <Card
        image= {3}
        title= "Farm House"
        user= "Pizza Mania"
        category="Spicy"
      />

      <Card
        image= {4}
        title= "Fresh Veggie"
        user= "Pizza Mania"
        category="Spicy"
        saved liked
      />

      <Card
        image= {5}
        title= "Tomato"
        user= "Pizza Mania"
        category="Spicy"
        saved
      />
    </View>
  )
}

export default Category
