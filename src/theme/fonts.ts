import {TextStyle} from 'react-native';

const size = {
  xs: 10,
  s: 12,
  default: 14,
  md: 16,
  lg: 20,
  xl: 24,
};

const weight: {[key: string]: TextStyle['fontWeight']} = {
  thin: '400',
  normal: 'normal',
  bold: 'bold',
  semi: '600',
  full: '900',
};
export default {size, weight};
