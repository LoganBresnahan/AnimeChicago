import React from 'react';

import SmallCard from './SmallCard';
import Styles from './styles';

const SmallCardContainer = (props) => {
  return(
    <SmallCard
      localStyles={Styles}
      displayData={props.displayData} />
  )
}

SmallCardContainer.propTypes = {
  displayData: React.PropTypes.object,
}

export default SmallCardContainer;
