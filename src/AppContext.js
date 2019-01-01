import React, { Component } from 'react';
import { View } from 'react-native';
import Context from './contexts';

export default class AppContext extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Hello coder9s group',
    };
  }

  render() {
    const { children } = this.props;
    return (
      <View>
        <Context.Provider value={this.state}>
          {children}
        </Context.Provider>
      </View>
    );
  }
}
