import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

const ImageButton = (props) => {
  const Styles = props.localStyles;

  return(
    <View style={Styles.view}>

      <Text style={Styles.text}>
        {props.title}
      </Text>

      <TouchableOpacity onPress={props.onPress} >
        <Image
          style={Styles.image}
          source={props.image} />
      </TouchableOpacity>

    </View>
  );
}

ImageButton.propTypes = {
  localStyles: React.PropTypes.object,
  title: React.PropTypes.string,
  image: React.PropTypes.number,
  onPress: React.PropTypes.func,
}

export default ImageButton;
