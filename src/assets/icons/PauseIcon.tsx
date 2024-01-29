import * as React from 'react';
import Svg, {SvgProps, Rect} from 'react-native-svg';
const PauseIcon = (props: SvgProps) => (
  <Svg width={14} height={18} fill="none" {...props}>
    <Rect width={5} height={18} x={0.5} fill="#fff" rx={2} />
    <Rect width={5} height={18} x={8.5} fill="#fff" rx={2} />
  </Svg>
);
export default PauseIcon;
