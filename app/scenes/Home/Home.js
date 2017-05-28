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
    const LocalStyles = this.props.localStyles;
    const SmallHSE = this.props.smallHSE;
    const SmallCard = this.props.smallCard;

    return (
      <Wrapper>

        <Text style={LocalStyles.title}>
          Your Upcoming Meetups
        </Text>

        <SmallHSE>
          {[1, 2, 3].map((index) =>
              <SmallCard key={index} />
            )
          }
        </SmallHSE>

        <Text style={LocalStyles.title}>
          All Upcoming Meetups
        </Text>

        <SmallHSE>
          {[1, 2, 3].map((index) =>
              <SmallCard key={index} />
            )
          }
        </SmallHSE>

      </Wrapper>
    );
  }
}

Home.propTypes = {
  localStyles: React.PropTypes.object,
  smallCard: React.PropTypes.func,
  smallHSE: React.PropTypes.func,
  wrapper: React.PropTypes.func,
}

export default Home;
