import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from 'react-native-button'

const Home = ({ navigation }) => {
  return (
    <View>
      <Button onPress={() => navigation.push('Login')} >Login</Button>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})
