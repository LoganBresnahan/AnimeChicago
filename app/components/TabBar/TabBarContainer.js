import React from 'react';

import TabBar from './TabBar';
import LocalStyles from './styles';

const TabBarContainer = (props) => {
  return(
    <TabBar
      localStyles={LocalStyles} />
  );
}

TabBarContainer.propTypes = {
}

export default TabBarContainer;
