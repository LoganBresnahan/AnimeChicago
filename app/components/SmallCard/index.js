import React from 'react';
import PropTypes from 'prop-types';

import SmallCardContainer from './SmallCardContainer';

const SmallCardIndex = (props) => {
  return(
    <SmallCardContainer
      displayData={props.displayData} />
  )
}

SmallCardIndex.propTypes = {
  displayData: PropTypes.object,
}

export default SmallCardIndex;
