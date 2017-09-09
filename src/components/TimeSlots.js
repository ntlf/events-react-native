import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

class TimeSlots extends React.Component {
  render() {
    const slots = [];

    for (let i = 0; i < 24; i++) {
      slots.push((
        <View
          key={i}
          style={styles.timeSlot}>
          <Text>{i + ':00'}</Text>
        </View>
      ))
    }

    return <View>{slots}</View>;
  }
}

const styles = StyleSheet.create({
  timeSlot: {
    height: 60,
    borderTopColor: 'black',
    borderTopWidth: 1
  }
})

export default TimeSlots