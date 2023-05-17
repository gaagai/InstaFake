import {StyleSheet} from 'react-native';
import fonts from '../../theme/fonts';
import colors from '../../theme/color';

export default StyleSheet.create({
  bold: {
    fontWeight: fonts.weight.bold,
    color: colors.black,
  },
  comment: {
    color: colors.darkGrey,
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentText: {
    flex: 1,
    color: colors.black,
  },
  icon: {
    marginHorizontal: 5,
  },
});
