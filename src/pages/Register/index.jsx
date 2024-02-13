import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from 'react-native-button'

const Register = ({ navigation }) => {
  return (
    <View>
      <Button style={{marginTop: 100}} onPress={() => navigation.push('Login')} >Login</Button>
    </View>
  )
}

export default Register

const styles = StyleSheet.create({})
