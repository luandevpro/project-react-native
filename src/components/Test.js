import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Test extends Component {
  render() {
     var {value} = this.props;
     console.log(value)
    return (
      <View>
        <Text style={{fontSize: 30}}> {value} </Text>
      </View>
    )
  }
}