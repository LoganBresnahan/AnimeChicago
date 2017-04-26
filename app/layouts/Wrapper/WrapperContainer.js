import React, { Component } from 'react';

import Wrapper from './Wrapper';
import GlobalStyles from '../../config/styles'

const WrapperContainer = (props) => {
  return (
    <Wrapper globalStyles={GlobalStyles} >
      {props.children}
    </Wrapper>
  );
}

export default WrapperContainer;

WrapperContainer.propTypes = {
}
