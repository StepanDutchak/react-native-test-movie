import {StyleSheet} from 'react-native';
import {fonts} from '../../../../../theme/fonts';
import themes from 'theme/colors';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    height: 150,
    width: 120,
  },
  imageStyle: {
    borderRadius: 12,
  },
  content: {
    flex: 1,
    width: 120,
  },
  dateReleaseTitle: {
    maxWidth: 70,
    ...fonts.title11EXB,
    color: themes.dark.text.movieRelease,
    marginTop: 8,
  },
  movieNotReleaseTitle: {
    marginTop: 4,
  },
  title: {
    marginTop: 8,
    ...fonts.title14,
  },
  subtitle: {
    marginTop: 4,
    ...fonts.subtitle13,
  },
});
