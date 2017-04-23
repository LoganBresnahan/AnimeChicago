import React, { Component } from 'react';

import SignIn from './SignIn';
import GlobalStyles from './../../config/styles';
import LocalStyles from './styles';
import Button from './../../components/Button/index';
import ImageButton from './../../components/ImageButton/index';
import Constants from '../../config/constants';

const SignInContainer = () => {
  const constants = new Constants();
  const meetup = {
    key: constants.meetupKey(),
    uri: constants.meetupURI(),
    mobile: constants.meetupSetMobile(),
  }

  return (
    <SignIn
      globalStyles={GlobalStyles}
      localStyles={LocalStyles}
      globalButton={Button}
      globalImageButton={ImageButton}
      meetup={meetup} />
  );
}

export default SignInContainer;
