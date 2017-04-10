import React, { Component } from 'react';

import SignIn from './SignIn';
import GlobalStyles from './../../config/styles';
import LocalStyles from './styles';
import Button from './../../components/Button/index';
import ImageButton from './../../components/ImageButton/index';

const SignInContainer = () => {
  return (
    <SignIn
      globalStyles={GlobalStyles}
      localStyles={LocalStyles}
      globalButton={Button}
      globalImageButton={ImageButton} />
  );
}

export default SignInContainer;
