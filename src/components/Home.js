import React, { Component } from 'react'
import { Text, View, StatusBar } from 'react-native'
import DayViewContainer from '../containers/DayViewContrainer'

class Home extends Component {
  static navigationOptions = {
    title: 'Events',
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: "#3F51B5"
    }
  }

  render() {
    return (
      <View>
        <DayViewContainer />
      </View>
    )
  }
}

export default Home
