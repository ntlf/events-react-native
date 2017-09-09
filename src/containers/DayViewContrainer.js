import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native'
import DayView from '../components/DayView'
import { fetchEvents } from '../actions'
import { NavigationActions } from 'react-navigation'


class DayViewContainer extends Component {
  componentDidMount() {
    const { dispatch } = this.props

    dispatch(fetchEvents((new Date()).toISOString().substring(0, 10)))
  }

  render() {
    const { events, isFetching, onEventPress } = this.props

    return (
      <View>
        <DayView isFetching={isFetching} events={events} onEventPress={onEventPress} />
      </View>
    )
  }
}

function mapStateToProps(state) {
  const { events, isFetching } = state.eventsByDate

  return {
    isFetching,
    events
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onEventPress: (event) => {
      dispatch(NavigationActions.navigate({ routeName: 'Description', params: event }))
    },
    dispatch: (func) => {
      dispatch(func)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DayViewContainer)