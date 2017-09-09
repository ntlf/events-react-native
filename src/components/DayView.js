import React, { Component } from 'react'
import {
  View,
  ScrollView,
  StyleSheet,
  ActivityIndicator
} from 'react-native'
import CurrentTime from './CurrentTime'
import Events from './Events'
import TimeSlots from './TimeSlots'

class DayView extends Component {
  render() {
    return (
      <View>
        {this.props.isFetching && <ActivityIndicator
          style={styles.centering}
          size="large"
        />}
        {!this.props.isFetching &&
          <ScrollView>
            <TimeSlots />
            <Events events={this.props.events} onEventPress={this.props.onEventPress} />
            <CurrentTime />
          </ScrollView>}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  centering: {
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default DayView
