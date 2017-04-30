import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Styles from './config/styles';
import SignIn from './scenes/SignIn/index';
import Home from './scenes/Home/index';

class App extends Component {
  render() {
    return (
      <Router
        navigationBarStyle={Styles.navBar}
        titleStyle={Styles.navBarTitle}
        barButtonIconStyle={Styles.navbarIcons}
        duration={200} >

        <Scene key='root'>
          <Scene key='SignIn' component={SignIn} title="Sign In" initial={true} />
          <Scene key='Home' component={Home} title="Home" />
        </Scene>

      </Router>
    );
  }
}

export default App;
