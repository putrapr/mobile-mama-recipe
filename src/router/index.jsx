import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator()

import Login from '../pages/Login'
import Register from '../pages/Register'
import Home from '../pages/Home'
import BottomTabs from '../components/template/ButtonTabs'
import Category from '../pages/Home/category'
import EditProfile from '../pages/Profile/edit'
import LikedRecipe from '../pages/Profile/likedRecipe'
import MyRecipe from '../pages/Profile/myRecipe'
import SavedRecipe from '../pages/Profile/savedRecipe'
import DetailRecipe from '../pages/Recipe'
import VideoRecipe from '../pages/Recipe/video'
// import Search from '../pages/Home/search'
// import UpdateRecipe from '../pages/Recipe/update'


const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="Register" component={Register} options={{headerTitle: '', headerTransparent: true}}/>
        <Stack.Screen name="BottomTabs" component={BottomTabs} options={{headerShown: false}} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Category" component={Category}
          options={{
            title: 'Popular Menu',
            headerTitleStyle: {
              color: '#EEC302',
            },
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen name="EditProfile" component={EditProfile}
          options={{
            title: 'Edit Profile',
            headerTitleStyle: {
              color: '#EEC302',
            },
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen name="MyRecipe" component={MyRecipe}
          options={{
            title: 'My Recipe',
            headerTitleStyle: {
              color: '#EEC302',
            },
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen name="SavedRecipe" component={SavedRecipe}
          options={{
            title: 'Saved Recipe',
            headerTitleStyle: {
              color: '#EEC302',
            },
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen name="LikedRecipe" component={LikedRecipe}
          options={{
            title: 'Liked Recipe',
            headerTitleStyle: {
              color: '#EEC302',
            },
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen name="DetailRecipe" component={DetailRecipe} options={{headerShown: false}}/>
        <Stack.Screen name="VideoRecipe" component={VideoRecipe} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router
