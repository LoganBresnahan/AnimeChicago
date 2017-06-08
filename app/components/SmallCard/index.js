import React from 'react';

import SmallCardContainer from './SmallCardContainer';

const SmallCardIndex = (props) => {
  return(
    <SmallCardContainer
      displayData={props.displayData} />
  )
}

SmallCardIndex.propTypes = {
  displayData: React.PropTypes.object,
}

export default SmallCardIndex;
