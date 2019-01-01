import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

export default function Test({ value }) {
  return (
    <View>
      <Text style={{ fontSize: 30 }}>
        {value}
      </Text>
    </View>
  );
}
Test.propTypes = {
  value: PropTypes.string.isRequired,
};
