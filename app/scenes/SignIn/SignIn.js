import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
} from 'react-native';

class SignIn extends Component {
  constructor(props){
    super(props)

    this.handleSingIn = this.handleSingIn.bind(this)
    this.handleSkipSignIn = this.handleSkipSignIn.bind(this)
  }

  handleSingIn() {
    console.log("Sign In Pressed");
  }

  handleSkipSignIn() {
    console.log("Skip Pressed");
  }

  render() {
    const GlobalStyles = this.props.globalStyles;
    const LocalStyles = this.props.localStyles;
    const Button = this.props.globalButton;
    const ImageButton = this.props.globalImageButton;

    return (
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
            onPress={this.handleSingIn} />

          <ImageButton
            title={"Explore"}
            image={require('./../../images/arrow-right.png')}
            onPress={this.handleSkipSignIn} />

        </View>

      </View>
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
