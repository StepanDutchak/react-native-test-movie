import {StyleSheet} from 'react-native';
import variables from './variables';
import themes from './colors';

export const fonts = StyleSheet.create({
  h1Title: {
    fontFamily: variables.fontsType.NunitoSansBold,
    fontWeight: variables.fontWeight.bold,
    fontSize: variables.fontSize.size20,
    lineHeight: variables.lineHeight[24],
    color: themes.dark.WHITE,
  },
  h2Title: {
    fontFamily: variables.fontsType.NunitoSansBold,
    fontWeight: variables.fontWeight.bold,
    fontSize: variables.fontSize.size24,
    lineHeight: variables.lineHeight[27],
    color: themes.dark.WHITE,
  },
  h3Title: {
    fontFamily: variables.fontsType.NunitoSansBold,
    fontWeight: variables.fontWeight.bold,
    fontSize: variables.fontSize.size20,
    lineHeight: variables.lineHeight[24],
    letterSpacing: variables.letterSpacing['0.5'],
    color: themes.dark.WHITE,
  },
  title14: {
    fontFamily: variables.fontsType.NunitoSansRegular,
    fontWeight: variables.fontWeight.semibold,
    fontSize: variables.fontSize.size14,
    lineHeight: variables.lineHeight[17],
    color: themes.dark.text.categoryMoviesTitle,
  },
  subtitle13: {
    fontFamily: variables.fontsType.NunitoSansRegular,
    fontWeight: variables.fontWeight.normal,
    fontSize: variables.fontSize.size13,
    lineHeight: variables.lineHeight[16],
    color: themes.dark.banner_subtitle,
  },
  title11EXB: {
    fontFamily: variables.fontsType.NunitoSansBold,
    fontWeight: variables.fontWeight.extrabold,
    fontSize: variables.fontSize.size10,
    lineHeight: variables.lineHeight[14],
    color: themes.dark.text.categoryMoviesTitle,
    letterSpacing: variables.letterSpacing['1'],
  },
  title16B: {
    fontFamily: variables.fontsType.NunitoSansBold,
    fontWeight: variables.fontWeight.bold,
    fontSize: variables.fontSize.size16,
    lineHeight: variables.lineHeight[20],
    color: themes.dark.text.categoryMoviesTitle,
    letterSpacing: variables.letterSpacing['1'],
  },
});
