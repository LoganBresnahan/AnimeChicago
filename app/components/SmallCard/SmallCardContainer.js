import React from 'react';
import PropTypes from 'prop-types';

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
  displayData: PropTypes.object,
}

export default SmallCardContainer;
