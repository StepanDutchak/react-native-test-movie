import lightTheme from './lightTheme';
import darkTheme from './darkTheme';

const WHITE = '#FFFFFF';
const BLACK = '#000000';

const common = {
  WHITE,
  BLACK,
  RED: 'rgba(255, 23, 67, 1)',
  GREEN: 'rgba(66, 154, 112, 1)',
  YELLOW: 'gold',
  TRANSPARENT: 'rgba(0, 0, 0, 0)',
};

const light = {
  ...common,
  ...lightTheme,
};

const dark = {
  ...common,
  ...darkTheme,
};

const themes = {light, dark};

export default themes;
