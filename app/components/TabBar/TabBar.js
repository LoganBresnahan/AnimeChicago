import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
} from 'react-native';

const TabBar = (props) => {
  const LocalStyles = props.localStyles;

  return(
    <View style={LocalStyles.bar}>

      <View style={LocalStyles.buttons}>
        {props.children}
      </View>

    </View>
  );
}

TabBar.propTypes = {
  localStyles: PropTypes.object,
}

export default TabBar;
