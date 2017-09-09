import React, { Component } from 'react'
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native'

class CurrentTime extends Component {
  render() {
    const date = new Date();
    const time = date.getHours() * 60 + date.getMinutes()

    return (
      <View
        style={[styles.currentTime, { top: time }]}>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  currentTime: {
    position: 'absolute',
    left: 0,
    right: 0,
    borderTopColor: 'red',
    borderTopWidth: 2
  }
})

export default CurrentTime