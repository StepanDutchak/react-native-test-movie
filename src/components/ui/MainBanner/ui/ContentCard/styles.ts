import {StyleSheet} from 'react-native';
import {fonts} from '../../../../../theme/fonts';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    marginRight: 20,
    height: 300,
  },
  content: {
    justifyContent: 'flex-end',
    height: 150,
    padding: 16,
    borderRadius: 12,
  },
  bgImage: {
    borderRadius: 12,
  },
  bgShadow: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 1,
    zIndex: 100,
    backgroundColor: 'black',
    shadowColor: 'red',
    shadowOffset: {
      width: 0,
      height: -19,
    },
    shadowOpacity: 9.5,
    shadowRadius: 8,
    elevation: 10,
  },
  title: {
    ...fonts.h2Title,
  },
  subtitle: {
    marginTop: 4,
    ...fonts.subtitle13,
  },
});
