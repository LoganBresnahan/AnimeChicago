import React from 'react';

import ImageButtonContainer from './ImageButtonContainer';

const ImageButtonIndex = (props) => {
  return(
    <ImageButtonContainer
      title={props.title}
      image={props.image}
      onPress={props.onPress} />
  )
}

ImageButtonIndex.propTypes = {
  title: React.PropTypes.string,
  image: React.PropTypes.number,
  onPress: React.PropTypes.func,
}

export default ImageButtonIndex;
