/* eslint-disable react/no-unstable-nested-components */
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Feather from 'react-native-vector-icons/Feather'
import Home from '../../../pages/Home'
import AddRecipe from '../../../pages/Recipe/add'
import Profile from '../../../pages/Profile'
const Tab = createBottomTabNavigator()

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home}
        options={{
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          headerShown:false,
          tabBarIcon: ({focused}) => (
            focused ?
              <Feather name="home" color={'white'} size={25}  /> :
              <Feather name="home" color={'gray'} size={25}  />
          ),
          tabBarActiveBackgroundColor: '#EEC302',
          tabBarInactiveBackgroundColor: 'white',
        }}
      />
      <Tab.Screen name="AddRecipe" component={AddRecipe}
        options={{
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          headerShown:false,
          tabBarIcon: ({focused}) => (
            focused ?
              <Feather name="plus-square" color={'white'} size={25}  /> :
              <Feather name="plus-square" color={'gray'} size={25}  />
          ),
          tabBarActiveBackgroundColor: '#EEC302',
          tabBarInactiveBackgroundColor: 'white',
        }}
      />
      <Tab.Screen name="Profile" component={Profile}
        options={{
          tabBarShowLabel: false,
          headerShown:false,
          tabBarIcon: ({ focused }) => (
            focused ?
              <Feather name="user" color={'white'} size={25}  /> :
              <Feather name="user" color={'gray'} size={25}  />
          ),
          tabBarActiveBackgroundColor: '#EEC302',
          tabBarInactiveBackgroundColor: 'white',
        }}
      />
    </Tab.Navigator>
  )
}

export default MyTabs
