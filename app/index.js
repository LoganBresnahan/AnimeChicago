import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Styles from './config/styles';
import SignIn from './scenes/SignIn/index';
import Home from './scenes/Home/index';
import Sponsors from './scenes/Sponsors/index';
import AdminEvent from './scenes/AdminEvent/index';

class App extends Component {
  render() {
    return (
      <Router
        navigationBarStyle={Styles.navBar}
        titleStyle={Styles.navBarTitle}
        barButtonIconStyle={Styles.navbarIcons}
        duration={200} >

        <Scene key='root'>
          <Scene key='SignIn' component={SignIn} title="Anime Chicago" initial={true} />
          <Scene key='Home' component={Home} title="Anime Chicago" />
          <Scene key='Sponsors' component={Sponsors} title="Anime Chicago" />
          <Scene key='AdminEvent' component={AdminEvent} title="Anime Chicago" />
        </Scene>

      </Router>
    );
  }
}

export default App;
