import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import Button from 'react-native-button'

const Register = ({ navigation }) => {
  return (
    <>
      <View style={s.container}>
        <Text style={ s.title }>Let’s Get Started !</Text>
        <Text style={{ marginBottom: 20 }}>Create new account to access all features</Text>
        <TextInput
          style={s.input}
          placeholder="Name"
        />
        <TextInput
          style={s.input}
          placeholder="Email"
        />
        <TextInput
          style={s.input}
          placeholder="Phone Number"
        />
        <TextInput
          style={s.input}
          placeholder="Create New Password"
          secureTextEntry
        />
        <TextInput
          style={s.input}
          placeholder="New Password"
          secureTextEntry
        />
        {/* <View style={{height:30}} /> */}

        <Button
          containerStyle={{ marginTop:30 }}
          style={{ height: 60, width: 332, borderRadius: 10, backgroundColor: '#EFC81A', color: 'white', paddingTop: 17  }}
          onPress={() => navigation.push('Login')}
        >CREATE
        </Button>

        <View style={{ display:'flex', flexDirection:'row', justifyContent:'center', marginTop:20 }}>
          <Text>Already have account?</Text>
          <Button
            style={{color: '#EFC81A', fontSize:14, marginLeft: 3 }}
            onPress={() => navigation.push('Login')}
          >Log in here
          </Button>
        </View>
      </View>
    </>
  )
}

export default Register

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
    marginTop: 50,
    color: '#EFC81A',
    fontSize: 30,
    fontWeight: 'bold',
  },

  input: {
    height: 60,
    width: '100%',
    margin: 12,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 40,
  },

  login: {
    height: 60,
    backgroundColor: '#EFC81A',
  },
})

