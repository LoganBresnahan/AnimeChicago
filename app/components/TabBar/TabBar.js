import React from 'react';
import {
  View,
  Text,
} from 'react-native';

const TabBar = (props) => {
  const LocalStyles = props.localStyles;

  return(
    <View style={LocalStyles.bar}>
      <Text>hey</Text>
    </View>
  );
}

TabBar.propTypes = {
  localStyles: React.PropTypes.object,
}

export default TabBar;
