import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  Linking,
  AsyncStorage,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

class SignIn extends Component {
  constructor(props){
    super(props)

    this.handleSignIn = this.handleSignIn.bind(this)
    this.handleSkipSignIn = this.handleSkipSignIn.bind(this)
    this.handleQueryParams = this.handleQueryParams.bind(this)
    this.setTempKey = this.setTempKey.bind(this)
  }

  handleSignIn() {
    Linking.openURL(`https://secure.meetup.com/oauth2/authorize?client_id=${this.props.meetup.key}&response_type=token&redirect_uri=${this.props.meetup.uri}&set_mobile=${this.props.meetup.mobile}`);
  }

  handleSkipSignIn() {
    Actions.Home()
  }

  componentDidMount() {
    Linking.addEventListener('url', this.handleQueryParams);
  }

  componentWillUnmount() {
    Linking.removeEventListener('url', this.handleQueryParams);
  }

  handleQueryParams(event) {
    urlKeyRegex = /animechicago:\/\/com\.animechicago#access_token=([0-9a-zA-Z]+)&token_type=bearer&expires_in=(\d+)/;
    const matchGroups = urlKeyRegex.exec(event.url);

    this.setTempKey(matchGroups[1])
  }

  async setTempKey(key) {
    // this.props.KeychainHandler.setClientKey(key)
    try {
      await AsyncStorage.setItem('ClientKey', `${key}`);
    } catch (error) {
      console.log(`Error: Key did not save. ${error}`);
    }
  }

  render() {
    const GlobalStyles = this.props.globalStyles;
    const LocalStyles = this.props.localStyles;
    const ImageButton = this.props.imageButton;
    const Wrapper = this.props.wrapper;

    return (
      <Wrapper>

          <Text style={LocalStyles.welcome}>
            AnimeChicago
          </Text>

          <Image
            style={LocalStyles.crest}
            source={require('../../images/crest.png')} />

          <View style={LocalStyles.buttons}>

            <ImageButton
              title={"Sign In"}
              image={require('../../images/meetup-media.png')}
              onPress={this.handleSignIn} />

            <ImageButton
              title={"Explore"}
              image={require('../../images/arrow-right.png')}
              onPress={this.handleSkipSignIn} />

          </View>

      </Wrapper>
    );
  }
}

SignIn.propTypes = {
  wrapper: React.PropTypes.func,
  localStyles: React.PropTypes.object,
  imageButton: React.PropTypes.func,
  meetup: React.PropTypes.object,
  KeychainHandler: React.PropTypes.func,
}

export default SignIn;
