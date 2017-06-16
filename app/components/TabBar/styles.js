import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

import em from '../../lib/EmSimulator';

const Style = StyleSheet.create({
  bar: {
    backgroundColor: '#486ACC',
    height: em(5),
    width: Dimensions.get('window').width,
    position: 'absolute',
    justifyContent: 'flex-end',
    bottom: 0,
    right: 0,
    left: 0,
  },
})

export default Style;
