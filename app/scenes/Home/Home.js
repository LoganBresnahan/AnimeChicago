import React, { Component } from 'react';
import {
  Text,
} from 'react-native';

class Home extends Component {
  constructor(props){
    super(props)
  }

  render() {
    const Wrapper = this.props.wrapper;

    return (
      <Wrapper>

        <Text>
          Home
        </Text>

      </Wrapper>
    );
  }
}

Home.propTypes = {
  wrapper: React.PropTypes.func,
}

export default Home;
