import React, { Component } from 'react';

import Home from './Home';
import LocalStyles from './styles';
import SmallCard from '../../components/SmallCard/index';
import SmallHorizontalScrollEnclosure from '../../components/SmallHorizontalScrollEnclosure/index';
import Wrapper from '../../layouts/Wrapper/index';

const HomeContainer = () => {
  return (
    <Home
      localStyles={LocalStyles}
      smallCard={SmallCard}
      smallHSE={SmallHorizontalScrollEnclosure}
      wrapper={Wrapper} />
  );
}

export default HomeContainer;
