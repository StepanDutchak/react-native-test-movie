import {StyleSheet} from 'react-native';
import themes from 'theme/colors';
import {fonts} from 'theme/fonts';

export const styles = StyleSheet.create({
  container: {
    paddingLeft: 6,
    paddingRight: 16,
    marginTop: 12,
    height: 68,
    borderRadius: 12,
    backgroundColor: themes.dark.continueWatchBG,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    flex: 1,
  },
  headerText: {
    ...fonts.h3Title,
  },
  textContainer: {
    marginLeft: 12,
  },
  image: {
    borderRadius: 12,
    width: 44,
    height: 56,
  },
  raw: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    maxWidth: 200,
    ...fonts.title16B,
  },
  subTitle: {
    ...fonts.subtitle13,
  },
});
