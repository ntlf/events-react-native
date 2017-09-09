import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import { addNavigationHelpers } from 'react-navigation'
import { connect } from 'react-redux'
import AppNavigator from '../navigators/AppNavigator'

class App extends Component {
  render() {
    StatusBar.setBarStyle('light-content', true)
    StatusBar.setBackgroundColor('#303F9F', true)

    return (
      <AppNavigator navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.nav,
      })} />
    )
  }
}

function mapStateToProps(state) {
  return {
    nav: state.nav
  }
}

export default connect(mapStateToProps)(App);
