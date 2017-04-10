import React from 'react';

import Button from './Button';
import Styles from './styles';

const ButtonContainer = (props) => {
  return(
    <Button
      localStyles={Styles}
      title={props.title}
      onPress={props.onPress} />
  );
}

ButtonContainer.propTypes = {
  title: React.PropTypes.string,
  onPress: React.PropTypes.func,
}

export default ButtonContainer;
