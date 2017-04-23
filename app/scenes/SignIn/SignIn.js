import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  Linking,
  ScrollView,
  StatusBar,
} from 'react-native';

class SignIn extends Component {
  constructor(props){
    super(props)

    this.handleSignIn = this.handleSignIn.bind(this)
    this.handleSkipSignIn = this.handleSkipSignIn.bind(this)
  }

  handleSignIn() {
    Linking.openURL(`https://secure.meetup.com/oauth2/authorize?client_id=${this.props.meetup.key}&response_type=token&redirect_uri=${this.props.meetup.uri}&set_mobile=${this.props.meetup.mobile}`)
    console.log("Sign In Pressed");
  }

  handleSkipSignIn() {
  }

  render() {
    const GlobalStyles = this.props.globalStyles;
    const LocalStyles = this.props.localStyles;
    const Button = this.props.globalButton;
    const ImageButton = this.props.globalImageButton;

    return (
      <ScrollView>
        <StatusBar translucent={true} backgroundColor={'transparent'} />
        <View style={GlobalStyles.container}>

          <Text style={LocalStyles.welcome}>
            AnimeChicago
          </Text>

          <Image
            style={LocalStyles.crest}
            source={require('./../../images/crest.png')} />

          <View style={LocalStyles.buttons}>

            <ImageButton
              title={"Sign In"}
              image={require('./../../images/meetup-media.png')}
              onPress={this.handleSignIn} />

            <ImageButton
              title={"Explore"}
              image={require('./../../images/arrow-right.png')}
              onPress={this.handleSkipSignIn} />

          </View>

        </View>
      </ScrollView>
    );
  }
}

SignIn.propTypes = {
  globalStyles: React.PropTypes.object,
  localStyles: React.PropTypes.object,
  globalButton: React.PropTypes.func,
  globalImageButton: React.PropTypes.func,
}

export default SignIn;
