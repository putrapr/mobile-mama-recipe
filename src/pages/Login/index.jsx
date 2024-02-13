import { View, Text, TextInput, StyleSheet, Alert } from 'react-native'
import React from 'react'
import Button from 'react-native-button'
import Feather from 'react-native-vector-icons/Feather'

const Login = ({ navigation }) => {
  return (
    <>
      <View style={s.container}>
        <Feather name="user" style={s.image} />
        <Text style={s.title}>Welcome !</Text>
        <Text style={{ marginBottom: 30 }}>Log in to your exiting account.</Text>

        <TextInput
          style={s.input}
          placeholder="examplexxx@gmail.com"
        />
        <TextInput
          style={s.input}
          placeholder="Password"
          secureTextEntry
        />
      </View>

      <View style={{ display:'flex', alignItems: 'flex-end', paddingHorizontal: 30 }}>
        <Button
          style={{ fontSize: 14, color: '#999999' }}
        >Forgot Password ?
        </Button>
      </View>

      <View style={{ marginTop: 50, paddingHorizontal: 30 }}>
        <Button
          style={{ height: 60, borderRadius: 10, backgroundColor: '#EFC81A', color: 'white', paddingTop:17  }}
          onPress={() => navigation.push('Home')}
        >LOG IN
        </Button>

        <View style={{ display:'flex', flexDirection:'row', justifyContent:'center', marginTop:20 }}>
          <Text >
          Don’t have an account?
          </Text>
          <Button
            style={{color: '#EFC81A', fontSize:14, marginLeft: 3 }}
            onPress={() => navigation.push('Register')}
          >Sign Up
          </Button>
        </View>
      </View>
    </>
  )
}

const s = StyleSheet.create({
  container: {
    display:'flex',
    alignItems: 'center',
    paddingTop: 30,
    paddingHorizontal: 30,
  },

  image: {
    fontSize: 120,
    color: 'white',
    backgroundColor:'#c1c1c1',
    borderRadius:90,
    padding:30,
  },

  title: {
    marginTop: 20,
    color: '#EFC81A',
    fontSize: 20,
    fontWeight: 'bold',
  },

  input: {
    height: 60,
    width: '100%',
    margin: 12,
    borderWidth: 1,
    borderColor: '#EFC81A',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 40,
  },

  login: {
    height: 60,
    backgroundColor: '#EFC81A',
  },
})

export default Login