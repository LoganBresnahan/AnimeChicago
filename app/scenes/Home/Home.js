import React, { Component } from 'react';
import {
  Text,
  AsyncStorage,
} from 'react-native';

class Home extends Component {
  constructor(props){
    super(props)

    this.yourUpcomingMeetups = this.yourUpcomingMeetups.bind(this)
    this.allUpcomingMeetups = this.allUpcomingMeetups.bind(this)
    this.chooseAllEventsView = this.chooseAllEventsView.bind(this)
    this.chooseYourEventsView = this.chooseYourEventsView.bind(this)
    this.getTempKey = this.getTempKey.bind(this)

    this.state = {
      yourEvents: null,
      allEvents: null,
      clientKey: null,
    }

    this.getTempKey();
  }

  async getTempKey() {
    try {
      const key = await AsyncStorage.getItem('ClientKey');

      if (key !== null) {
        this.setState({
          clientKey: key,
        })
        this.yourUpcomingMeetups();
        this.allUpcomingMeetups();
      }
    } catch (error) {
      console.log(`Error: Did not get the key. ${error}`);
      //check errors
    }
  }

  yourUpcomingMeetups() {
    if (this.state.clientKey) {
      fetch(`https://api.meetup.com/self/events?&access_token=${this.state.clientKey}&status=upcoming`, {
        method: 'GET',
      }).then((response) => {
        response.json().then((data) => {
          //check errors here?
          this.setState({
            yourEvents: data,
          })
        })
      })
    }
  }

  allUpcomingMeetups() {
    if (this.state.clientKey) {
      fetch(`https://api.meetup.com/animechicago/events?&access_token=${this.state.clientKey}`, {
        method: 'GET',
      }).then((response) => {
        response.json().then((data) => {
          this.setState({
            allEvents: data,
          })
        })
      })
    }
  }

  chooseYourEventsView(SmallHorizontalScrollEnclosure, SmallCard) {
    if (this.state.yourEvents) {
      return(
        <SmallHorizontalScrollEnclosure>
          {this.state.yourEvents.map((meetupEvent, index) =>
            <SmallCard
              key={index}
              displayData={meetupEvent} />
          )}
        </SmallHorizontalScrollEnclosure>
      )
    } else {
      //handle errors?
      return(
        <Text>
          Loading...
        </Text>
      )
    }
  }

  chooseAllEventsView(SmallHorizontalScrollEnclosure, SmallCard) {
    if (this.state.allEvents) {
      return(
        <SmallHorizontalScrollEnclosure>
          {this.state.allEvents.map((meetupEvent, index) =>
            <SmallCard
              key={index}
              displayData={meetupEvent} />
          )}
        </SmallHorizontalScrollEnclosure>
      )
    } else {
      return(
        <Text>
          Loading...
        </Text>
      )
    }
  }

  render() {
    const Wrapper = this.props.wrapper;
    const LocalStyles = this.props.localStyles;
    const SmallHorizontalScrollEnclosure = this.props.smallHorizontalScrollEnclosure;
    const SmallCard = this.props.smallCard;

    return (
      <Wrapper>

        <Text style={LocalStyles.title}>
          Your Upcoming Meetups
        </Text>

        {this.chooseYourEventsView(SmallHorizontalScrollEnclosure, SmallCard)}

        <Text style={LocalStyles.title}>
          All Upcoming Meetups
        </Text>

        {this.chooseAllEventsView(SmallHorizontalScrollEnclosure, SmallCard)}

      </Wrapper>
    );
  }
}

Home.propTypes = {
  localStyles: React.PropTypes.object,
  smallCard: React.PropTypes.func,
  smallHorizontalScrollEnclosure: React.PropTypes.func,
  wrapper: React.PropTypes.func,
}

export default Home;
