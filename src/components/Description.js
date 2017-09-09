import React, { Component } from 'react'
import { WebView } from 'react-native'

class Description extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.title}`,
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: "#3F51B5"
    }
  })

  render() {
    return (
      <WebView source={{ html: this.props.navigation.state.params.description }} />
    )
  }
}

export default Description