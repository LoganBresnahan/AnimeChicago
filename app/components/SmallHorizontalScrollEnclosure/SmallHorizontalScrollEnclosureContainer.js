import React from 'react';

import SmallHorizontalScrollEnclosure from './SmallHorizontalScrollEnclosure';
import LocalStyles from './styles';

const SmallHorizontalScrollEnclosureContainer = (props) => {
  return(
    <SmallHorizontalScrollEnclosure
      localStyles={LocalStyles} >

      {props.children}

    </SmallHorizontalScrollEnclosure>
  )
}

SmallHorizontalScrollEnclosureContainer.propTypes = {
}

export default SmallHorizontalScrollEnclosureContainer;
