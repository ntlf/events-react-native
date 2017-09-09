import React, { Component } from 'react'
import { StatusBar, BackHandler } from 'react-native'
import { addNavigationHelpers, NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'
import AppNavigator from '../navigators/AppNavigator'

class App extends Component {
  constructor(props) {
    super(props)
    this.onBackPress = this.onBackPress.bind(this)
  }

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.onBackPress)
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.onBackPress)
  }

  onBackPress() {
    const { dispatch, nav } = this.props

    if (nav.index === 0) {
      return false
    }

    dispatch(NavigationActions.back())
    return true
  }

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
