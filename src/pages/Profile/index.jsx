import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import api from '../../config/api'
import Button from 'react-native-button'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Profile = ({ navigation }) => {
  const [profile, setProfile] = useState()

  const getData = async () => {
    try {
      const result = await api.get('/user')
      setProfile(result.data.data)
    } catch (err) {
      console.log(err.message)
    }
  }

  const logout = async () => {
    await AsyncStorage.clear()
    Alert.alert(
      'Success',
      'Logout Success',
    )
    navigation.navigate('Login')
  }

  useEffect(() => {
    return navigation.addListener('focus', () => getData())
  },[])

  return (
    <>
      <View style={{ height: '40%', backgroundColor: '#EEC302' }}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          { profile?.image &&
            <Image style={{ width: 90, height: 90, borderRadius: 90 / 2 }}
              source={ profile.image !== 'default.png' ? { uri: profile.image } : require('../../assets/img/default.png') }/>
          }
          <Text style={{ color:'white', fontSize: 16, fontWeight: 'bold', marginTop:20 }}>{profile?.name}</Text>
        </View>
      </View>

      <View style={{ borderWidth:1, borderColor: '#e2e2e2', borderRadius: 30, marginTop: -50, marginHorizontal:10, height:600, backgroundColor:'#efefef' }}>
        {/* Edit Profile */}
        <TouchableOpacity onPress={() => navigation.navigate('EditProfile', {name: profile?.name})} style={{ display:'flex', flexDirection: 'row', justifyContent: 'space-between', margin:20 }}>
          <View style={{ display:'flex', flexDirection: 'row' }}>
            <Feather name="user" color={'#EEC302'} size={25} />
            <Text style={{ color: '#000000', marginTop: 2, marginLeft:12, fontSize:16 }}>Edit Profile</Text>
          </View>
          <Feather name="chevron-right" color={'#8C8C8C'} size={25} />
        </TouchableOpacity>

        {/* My Recipe */}
        <TouchableOpacity onPress={() => navigation.navigate('MyRecipe')} style={{ display:'flex', flexDirection: 'row', justifyContent: 'space-between', margin:20 }}>
          <View style={{ display:'flex', flexDirection: 'row' }}>
            <Feather name="award" color={'#EEC302'} size={25} />
            <Text style={{ color: '#000000', marginTop: 2, marginLeft:12, fontSize:16 }}>My Recipe</Text>
          </View>
          <Feather name="chevron-right" color={'#8C8C8C'} size={25} />
        </TouchableOpacity>

        {/* Logout */}
        <Button
          style={{ height: 50, borderRadius: 10, backgroundColor: '#ed5252', color: 'white', paddingTop:12, marginHorizontal: 20, marginTop: 20  }}
          onPress={() => logout()}
        >Logout
        </Button>
        {/* Saved Recipe */}
        {/* <TouchableOpacity onPress={() => navigation.navigate('SavedRecipe')} style={{ display:'flex', flexDirection: 'row', justifyContent: 'space-between', margin:20 }}>
          <View style={{ display:'flex', flexDirection: 'row' }}>
            <Feather name="bookmark" color={'#EEC302'} size={25} />
            <Text style={{ color: '#000000', marginTop: 2, marginLeft:12, fontSize:16 }}>Saved Recipe</Text>
          </View>
          <Feather name="chevron-right" color={'#8C8C8C'} size={25} />
        </TouchableOpacity> */}

        {/* Liked Recipe */}
        {/* <TouchableOpacity onPress={() => navigation.navigate('LikedRecipe')} style={{ display:'flex', flexDirection: 'row', justifyContent: 'space-between', margin:20 }}>
          <View style={{ display:'flex', flexDirection: 'row' }}>
            <Feather name="thumbs-up" color={'#EEC302'} size={25} />
            <Text style={{ color: '#000000', marginTop: 2, marginLeft:12, fontSize:16 }}>Liked Recipe</Text>
          </View>
          <Feather name="chevron-right" color={'#8C8C8C'} size={25} />
        </TouchableOpacity> */}

      </View>
    </>
  )
}

export default Profile
