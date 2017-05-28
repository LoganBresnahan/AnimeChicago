import React from 'react';

import SmallCard from './SmallCard';
import Styles from './styles';

const SmallCardContainer = (props) => {
  return(
    <SmallCard
      localStyles={Styles} />
  )
}

SmallCardContainer.propTypes = {
}

export default SmallCardContainer;
