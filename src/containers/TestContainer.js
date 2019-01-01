import React, { Component } from 'react'
import {  View } from 'react-native'
import Test from '../components/Test';
import Context from '../contexts';

export default class TestContainer extends Component {
   static contextType = Context;
  render() {
     var value = this.context;
    return (
      <View>
        <Test value={value.value}/>
      </View>
    )
  }
}