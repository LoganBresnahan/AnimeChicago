import React from 'react';

import ImageButton from './ImageButton';
import Styles from './styles';

const ImageButtonContainer = (props) => {
  return(
    <ImageButton
      localStyles={Styles}
      title={props.title}
      image={props.image}
      onPress={props.onPress} />
  )
}

ImageButtonContainer.propTypes = {
  title: React.PropTypes.string,
  image: React.PropTypes.number,
  onPress: React.PropTypes.func,
}

export default ImageButtonContainer;
