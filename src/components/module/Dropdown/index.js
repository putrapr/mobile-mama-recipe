import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import Button from 'react-native-button'

const Dropdown = ({ cb, label = 'Select Item', width = 200, height = 50, bgColor = '#dfdfdf' }) => {
  const [visible, setVisible] = useState(false)

  const toggleDropdown = () => {
    setVisible(!visible)
  }

  return (
    <View style={{ backgroundColor: 'blue', zIndex: 1 }}>
      <TouchableOpacity style={[styles.button, {width:width, height:height, backgroundColor:bgColor}]}
        onPress={toggleDropdown}>
        <Text style={styles.buttonText}>{label}</Text>
        <Feather name="chevron-down" size={30} />
      </TouchableOpacity>

      {visible &&
        <View style={[styles.dropdown, { width: width }]}>
          <Button style={styles.item} onPress={() => cb('title', 'asc')}>A-Z</Button>
          <Button style={styles.item} onPress={() => cb('title', 'desc')}>Z-A</Button>
          <Button style={styles.item} onPress={() => cb('id', 'desc')}>New Recipe</Button>
          <Button style={styles.item} onPress={() => cb('id', 'asc')}>Old Recipe</Button>
        </View>
      }
    </View>
  )
}

export default Dropdown

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    zIndex: 1,
  },
  buttonText: {
    flex: 1,
    textAlign: 'center',
  },
  dropdown: {
    position: 'absolute',
    backgroundColor: '#fff',
    top: 50,
  },
  item: {
    paddingVertical: 5,
    color: '#7f7f7f',
    borderWidth:1,
  },
})
