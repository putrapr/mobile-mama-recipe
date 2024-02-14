import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator()

import Login from '../pages/Login'
import Register from '../pages/Register'
import Home from '../pages/Home'
import BottomTabs from '../components/ButtonTabs'
// import Category from '../pages/Home/category'
// import Search from '../pages/Home/search'
// import EditProfile from '../pages/Profile/edit'
// import AddRecipe from '../pages/Recipe/add'
// import Profile from '../pages/Profile'
// import LikedRecipe from '../pages/Profile/likedRecipe'
// import MyRecipe from '../pages/Profile/myRecipe'
// import SavedRecipe from '../pages/Profile/savedRecipe'

// import DetailRecipe from '../pages/Recipe'
// import UpdateRecipe from '../pages/Recipe/update'
// import VideoRecipe from '../pages/Recipe/video'


const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="Register" component={Register} options={{headerTitle: '', headerTransparent: true}}/>
        <Stack.Screen name="BottomTabs" component={BottomTabs} options={{headerShown: false}} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router
