import {StyleSheet} from 'react-native';
import {fonts} from '../../../../../theme/fonts';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    ...fonts.h1Title,
  },
  rightContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
