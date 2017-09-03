import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ScrollView,
  StatusBar,
  View,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const Wrapper = (props) => {
  const GlobalStyles = props.globalStyles;
  const TabBar = props.tabBar;
  const TabBarButton = props.tabBarButton;

  const actionHome = () => {
    Actions.Home()
  }

  const actionSignIn = () => {
    Actions.SignIn()
  }

  const actionOther = () => {

  }

  return (
    <View>
      <StatusBar translucent={true} backgroundColor={'transparent'} />

      <ScrollView>
        <View style={GlobalStyles.container}>
          {props.children}
        </View>
      </ScrollView>

      <TabBar>
        <TabBarButton
          wording={'Home'}
          icon={'icon'}
          onPress={actionHome} />

        <TabBarButton
          wording={"Today's Meetups"}
          icon={'icon'}
          onPress={actionOther} />

        <TabBarButton
          wording={'Sign In'}
          icon={'icon'}
          onPress={actionSignIn} />
      </TabBar>

    </View>
  );
}

Wrapper.propTypes = {
  globalStyles: PropTypes.object,
  tabBar: PropTypes.func,
  tabBarButton: PropTypes.func,
}

export default Wrapper;
