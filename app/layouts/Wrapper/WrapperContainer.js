import React, { Component } from 'react';

import Wrapper from './Wrapper';
import GlobalStyles from '../../config/styles'
import TabBar from '../../components/TabBar/index'

const WrapperContainer = (props) => {
  return (
    <Wrapper
      globalStyles={GlobalStyles}
      tabBar={TabBar} >

      {props.children}

    </Wrapper>
  );
}

export default WrapperContainer;

WrapperContainer.propTypes = {
}
