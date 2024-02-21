import React, { useEffect } from 'react'
import Router from './src/router'
import { setCustomText } from 'react-native-global-props'
import { LogLevel, OneSignal } from 'react-native-onesignal'

const App = () => {
  const customTextProps = {
    style: { fontFamily: 'AirbnbCereal' },
  }
  setCustomText(customTextProps)

  useEffect(() => {
    // Remove this method to stop OneSignal Debugging
    OneSignal.Debug.setLogLevel(LogLevel.Verbose)

    // OneSignal Initialization
    OneSignal.initialize('581c3e23-0734-4b1d-9f27-753b97d24f2c')

    // requestPermission will show the native iOS or Android notification permission prompt.
    // We recommend removing the following code and instead using an In-App Message to prompt for notification permission
    OneSignal.Notifications.requestPermission(true)

    // Method for listening for notification clicks
    OneSignal.Notifications.addEventListener('click', (event) => {
      console.log('OneSignal: notification clicked:', event)
    })
  })

  return <Router />
}

export default App
