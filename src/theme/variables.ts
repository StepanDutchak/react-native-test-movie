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

export default {
  fontSize: {
    size6: 6,
    size8: 8,
    size10: 10,
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
  },
  fontsType: {
    robotoRegular: 'Roboto-Regular',
    robotoBold: 'Roboto-Bold', // 700
    robotoMedium: 'Roboto-Medium', // 500
  },


  spacing: {
    2: 2,
    4: 4,
    8: 8,
    10: 10,
    12: 12,
    16: 16,
    17: 17,
    20: 20,
    24: 24,
    28: 28,
    32: 32,
    40: 40,
    48: 48,
    56: 56,
    64: 64,
    72: 72,
    80: 80,
  },
  fontWeight: {
    hairline: '100' as FontWeight,
    thin: '200' as FontWeight,
    light: '300' as FontWeight,
    normal: '400' as FontWeight,
    medium: '500' as FontWeight,
    semibold: '600' as FontWeight,
    bold: '700' as FontWeight,
    extrabold: '800' as FontWeight,
    black: '900' as FontWeight,
  },
  opacity: {
    0: 0,
    25: 0.25,
    50: 0.5,
    70: 0.7,
    75: 0.75,
    100: 1,
  },
};
