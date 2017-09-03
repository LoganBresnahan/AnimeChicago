import React from 'react';
import PropTypes from 'prop-types';
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
  localStyles: PropTypes.object,
}

export default SmallHorizontalScrollEnclosure;
