import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const Edit = () => {
  return (
    <>
      <View style={{ marginHorizontal: 20 }}>
        <TouchableOpacity style={{ borderBottomWidth: 1, marginTop: 20, borderColor: '#cccccc' }}>
          <Text style={{ marginBottom: 5 }}>Change Profile Picture</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{borderBottomWidth: 1, marginTop: 10, borderColor: '#cccccc' }}>
          <Text style={{ marginBottom: 5 }}>Change Password</Text>
        </TouchableOpacity>
      </View>

      <View style={{ position: 'absolute',left: 0, right: 0, bottom: 80, alignItems: 'center' }}>
        <View style={{ display: 'flex', backgroundColor: '#E7E7E7', borderRadius: 15, width: 200 }}>

          <TouchableOpacity style={{ height: 40, borderBottomWidth: 1, borderColor: 'white' }}>
            <Text style={{ textAlign: 'center', lineHeight: 35 }}>Photo Library</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ height: 40 }}>
            <Text style={{ textAlign: 'center', lineHeight: 35 }}>Take Photo</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ position: 'absolute',left: 0, right: 0, bottom: 30, alignItems: 'center' }}>
        <TouchableOpacity style={{ backgroundColor: '#E7E7E7', borderRadius: 15, width: 200  }} >
          <Text style={{ textAlign: 'center', lineHeight: 35, fontWeight: 'bold' }}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

export default Edit
