import React, { Component } from 'react'
import { Text, View } from 'react-native'
import AppContext from './src/AppContext';
import TestContainer from './src/containers/TestContainer';

export default class App extends Component {
  render() {
    return (
      <AppContext>
         <TestContainer />
      </AppContext>
    )
  }
}