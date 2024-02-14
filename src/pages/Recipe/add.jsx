import React from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView} from 'react-native'
import Button from 'react-native-button'

const Add = () => {
  return (
    <ScrollView>
      <View style={s.container}>
        <Text style={ s.title }>Add Your Recipe</Text>
        <TextInput
          style={s.input}
          placeholder="Title"
        />

        <TextInput
          editable
          multiline
          numberOfLines={10}
          maxLength={40}
          placeholder="Ingredient"
          style={{textAlignVertical: 'top', backgroundColor: 'white', borderRadius: 10, width: '100%', paddingVertical: 20, paddingHorizontal: 40}}
        />

        <TouchableOpacity style={{ height: 60, width: '100%', backgroundColor: 'white', borderRadius: 10, paddingVertical: 20, paddingHorizontal: 40, margin:12}} >
          <Text style={{ color: '#ababab' }}>Add Image</Text>
        </TouchableOpacity>

        <TextInput
          style={s.input}
          placeholder="Video link"
        />

        <Button style={{ height: 60, width: 200, borderRadius: 10, backgroundColor: '#EFC81A', color: 'white', paddingTop:17, marginVertical: 50  }}
        >Post</Button>

      </View>
    </ScrollView>
  )
}

export default Add

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
    marginBottom: 30,
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
