import React from 'react';
import {
  Modal,
  Text,
  TouchableOpacity,
} from 'react-native';

const SmallCard = (props) => {
  const Styles = props.localStyles;

  return(
    <TouchableOpacity>
      <Text
        style={Styles.body} >
        Hey
      </Text>
    </TouchableOpacity>
  );
}

SmallCard.propTypes = {
  localStyles: React.PropTypes.object,
}

export default SmallCard;
