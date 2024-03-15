import { View, Image, ImageBackground } from 'react-native'
import React, { useEffect } from 'react'
import bg from '../../assets/img/splash/bg.png'
import logo from '../../assets/img/splash/logo.png'

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login')
    }, 3000)
  }, [])

  return (
    <View style={{ width:'100%', height:'100%' }}>
      <ImageBackground
        style={{ width:'100%', height:'100%', justifyContent:'center', alignItems: 'center' }}
        source={bg}
        resizeMode="cover"
        alt="background"
      >
        <Image
          source={logo}
          width={0}
          height={0}
          alt="logo"
          style={{ width:130, height:160 }}
        />
      </ImageBackground>

    </View>
  )
}

export default Splash
