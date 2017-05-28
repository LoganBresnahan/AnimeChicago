import React from 'react';

import SmallHorizontalScrollEnclosureContainer from './SmallHorizontalScrollEnclosureContainer';

const SmallHorizontalScrollEnclosureIndex = (props) => {
  return(
    <SmallHorizontalScrollEnclosureContainer>
      {props.children}
    </SmallHorizontalScrollEnclosureContainer>
  )
}

SmallHorizontalScrollEnclosureIndex.propTypes = {
}

export default SmallHorizontalScrollEnclosureIndex;
