import { Dimensions } from 'react-native'

const EmSimulator = (value) => {

  const width = () => {
    return Dimensions.get('window').width;
  }

  const ratioWidth = () => {
    const screenDifference = (width() - 360) / 100;

    return 1 + screenDifference;
  }

  const baseUnit = () => {
    return 10;
  }

  const unit = () => {
    return baseUnit() * ratioWidth();
  }

  const em = (value) => {
    return unit() * value
  }

  return em(value);
}

export default EmSimulator;
