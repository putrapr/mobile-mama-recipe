import React from 'react'
import Router from './src/router'
import { setCustomText } from 'react-native-global-props'

const App = () => {
  const customTextProps = {
    style: { fontFamily: 'AirbnbCereal' },
  }
  setCustomText(customTextProps)
  return <Router />
}

export default App
