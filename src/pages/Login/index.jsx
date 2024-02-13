import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from 'react-native-button'

const Login = ({ navigation }) => {
  return (
    <View>
      <Button onPress={() => navigation.push('Register')} >Sign Up</Button>
      <Button onPress={() => navigation.push('Home')} >Login</Button>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})
