import React from 'react';

import ButtonContainer from './ButtonContainer';

const ButtonIndex = (props) => {
 return(
   <ButtonContainer
    title={props.title}
    onPress={props.onPress} />
 );
}

ButtonIndex.propTypes = {
  title: React.PropTypes.string,
  onPress: React.PropTypes.func,
}

export default ButtonIndex;
