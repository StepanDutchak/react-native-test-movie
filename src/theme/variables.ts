type FontWeight =
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | 'normal'
  | 'bold'
  | undefined;

const fontSize = {
  size6: 6,
  size8: 8,
  size10: 10,
  size11: 11,
  size12: 12,
  size13: 13,
  size14: 14,
  size16: 16,
  size18: 18,
  size20: 20,
  size22: 22,
  size24: 24,
  size26: 26,
  size28: 28,
  size30: 30,
  size32: 32,
  size36: 36,
  size40: 40,
};

const fontsType = {
  NunitoSansRegular: 'NunitoSans_10pt-Regular',
  NunitoSansBold: 'NunitoSans_10pt-Bold',
  NunitoSansMedium: 'NunitoSans_10pt-Medium',
  NunitoSansSemiBold: 'NunitoSans_10pt-SemiBold',
};

const fontWeight: Record<string, FontWeight> = {
  hairline: '100',
  thin: '200',
  light: '300',
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
  black: '900',
} as const;

const opacity = {
  0: 0,
  25: 0.25,
  50: 0.5,
  70: 0.7,
  75: 0.75,
  100: 1,
};

const lineHeight = {
  24: 24,
  27: 27,
  20: 20,
  17: 17,
  14: 14,
  16: 16,
};

const letterSpacing = {
  '0.5': 0.5,
  '1': 1,
};

export default {
  letterSpacing,
  lineHeight,
  opacity,
  fontWeight,
  fontsType,
  fontSize,
};
