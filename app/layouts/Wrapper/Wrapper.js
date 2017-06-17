import React, { Component } from 'react';
import {
  ScrollView,
  StatusBar,
  View,
} from 'react-native';

const Wrapper = (props) => {
  const GlobalStyles = props.globalStyles;
  const TabBar = props.tabBar;

  return (
    <View>
      <StatusBar translucent={true} backgroundColor={'transparent'} />

      <ScrollView>
        <View style={GlobalStyles.container}>
          {props.children}
        </View>
      </ScrollView>

      <TabBar />

    </View>
  );
}

Wrapper.propTypes = {
  globalStyles: React.PropTypes.object,
  tabBar: React.PropTypes.func,
}

export default Wrapper;
