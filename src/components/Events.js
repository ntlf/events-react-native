import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

class Events extends Component {
  render() {
    const events = [];

    for (let event of this.props.events) {
      const { id, title, start_date_time, end_date_time, color } = event

      const start = Date.parse(start_date_time.replace(/-/g, '/'))
      const end = Date.parse(end_date_time.replace(/-/g, '/'))

      const height = (end - start) / 1000 / 60

      const date = new Date(start)
      const top = date.getHours() * 60 + date.getMinutes()

      events.push((
        <TouchableOpacity
          key={id}
          onPress={() => this.props.onEventPress(event)}
          style={[styles.event, { backgroundColor: event.color }, { height: height }, { top: top }]}>
          <View>
            <Text>{title}</Text>
          </View>
        </TouchableOpacity>))
    }

    return <View style={styles.events}>{events}</View>
  }
}

const styles = StyleSheet.create({
  event: {
    position: 'absolute',
    left: 40,
    right: 0,
    padding: 5
  },
  events: {
    position: 'absolute',
    right: 0,
    left: 0
  }
})

export default Events