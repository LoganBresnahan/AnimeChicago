import React, { Component } from 'react';
import {
  ScrollView,
  StatusBar,
  View,
} from 'react-native';

const Wrapper = (props) => {
  const GlobalStyles = props.globalStyles;

  return (
    <ScrollView>

      <StatusBar translucent={true} backgroundColor={'transparent'} />

      <View style={GlobalStyles.container}>
        {props.children}
      </View>

    </ScrollView>
  );
}

export default Wrapper;

Wrapper.propTypes = {
  globalStyles: React.PropTypes.object,
}
