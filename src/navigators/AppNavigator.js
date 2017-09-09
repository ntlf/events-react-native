import React from 'react'
import { StackNavigator } from 'react-navigation'
import Home from '../components/Home'
import Description from '../components/Description'

const AppNavigator = StackNavigator({
  Home: { screen: Home },
  Description: { screen: Description }
}, {
    initialRouteName: 'Home',
    headerMode: 'screen'
  })

export default AppNavigator
