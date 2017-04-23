import React from 'react';
import { StyleSheet, PixelRatio } from 'react-native';

import em from '../../lib/EmSimulator'

const Styles = StyleSheet.create({
  welcome: {
    textAlign: 'center',
    fontSize: em(4),
    fontWeight: 'bold',
    color: '#46ECFF',
    marginBottom: em(2.5),
  },
  crest: {
    height: em(22.01),
    width: em(22.01),
    marginBottom: em(3.5),
  },
  buttons: {
    flexDirection: 'row',
  }
})

export default Styles;
