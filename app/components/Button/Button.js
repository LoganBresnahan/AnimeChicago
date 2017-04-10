import React from 'react';
import {
  TouchableOpacity,
  Text,
} from 'react-native';

const Button = (props) => {
  const Styles = props.localStyles;

  return(
    <TouchableOpacity onPress={props.onPress}>
      <Text
        style={Styles.button} >

        {props.title}

      </Text>
    </TouchableOpacity>
  );
}

Button.propTypes = {
  localStyles: React.PropTypes.object,
  title: React.PropTypes.string,
  onPress: React.PropTypes.func,
}

export default Button;
