import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

const SmallCard = (props) => {

  const displayTime = (data) => {
    const parsedTime = new Date(data.time)
    return `${parsedTime.getMonth() + 1}/${parsedTime.getDate()}/${parsedTime.getFullYear()}`
  }

  const Styles = props.localStyles;
  const Data = props.displayData;

  return(
    <View style={Styles.body} >
      <TouchableOpacity>

          <Text style={Styles.text}>
            {Data.status}
          </Text>

          <Text style={Styles.text}>
            {Data.name}
          </Text>

          <Text style={Styles.text}>
            {displayTime(Data)}
          </Text>

      </TouchableOpacity>
    </View>
  );
}

SmallCard.propTypes = {
  localStyles: PropTypes.object,
  displayData: PropTypes.object,
}

export default SmallCard;
