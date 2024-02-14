import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'

const Profile = ({ navigation }) => {
  return (
    <>
      <View style={{ height: '40%', backgroundColor: '#EEC302' }}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image source={ require('../../assets/img/default.png') } style={{ width: 90, height: 90, borderRadius: 90 / 2 }}/>
          <Text style={{ color:'white', fontSize: 16, fontWeight: 'bold', marginTop:20 }}>Putra Prasetya</Text>
        </View>
      </View>

      <View style={{ borderWidth:1, borderColor: '#e2e2e2', borderRadius: 30, marginTop: -50, marginHorizontal:10, height:600, backgroundColor:'#efefef' }}>
        {/* Edit Profile */}
        <TouchableOpacity onPress={() => navigation.navigate('EditProfile')} style={{ display:'flex', flexDirection: 'row', justifyContent: 'space-between', margin:20 }}>
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

        {/* Saved Recipe */}
        <TouchableOpacity onPress={() => navigation.navigate('SavedRecipe')} style={{ display:'flex', flexDirection: 'row', justifyContent: 'space-between', margin:20 }}>
          <View style={{ display:'flex', flexDirection: 'row' }}>
            <Feather name="bookmark" color={'#EEC302'} size={25} />
            <Text style={{ color: '#000000', marginTop: 2, marginLeft:12, fontSize:16 }}>Saved Recipe</Text>
          </View>
          <Feather name="chevron-right" color={'#8C8C8C'} size={25} />
        </TouchableOpacity>

        {/* Liked Recipe */}
        <TouchableOpacity onPress={() => navigation.navigate('LikedRecipe')} style={{ display:'flex', flexDirection: 'row', justifyContent: 'space-between', margin:20 }}>
          <View style={{ display:'flex', flexDirection: 'row' }}>
            <Feather name="thumbs-up" color={'#EEC302'} size={25} />
            <Text style={{ color: '#000000', marginTop: 2, marginLeft:12, fontSize:16 }}>Liked Recipe</Text>
          </View>
          <Feather name="chevron-right" color={'#8C8C8C'} size={25} />
        </TouchableOpacity>

      </View>
    </>
  )
}

export default Profile
