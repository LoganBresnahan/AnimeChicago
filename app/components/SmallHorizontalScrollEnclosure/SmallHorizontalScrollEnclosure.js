import React from 'react';
import {
  ScrollView,
} from 'react-native';

const SmallHorizontalScrollEnclosure = (props) => {
  const Styles = props.localStyles;

  return(
    <ScrollView horizontal={true} style={Styles.body}>
      {props.children}
    </ScrollView>
  );
}

SmallHorizontalScrollEnclosure.propTypes = {
  localStyles: React.PropTypes.object,
}

export default SmallHorizontalScrollEnclosure;
