import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const RightArrow = (props: SvgProps) => (
  <Svg width={10} height={18} fill="none" {...props}>
    <Path
      stroke="#F5F5F5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m1 1 8 8-8 8"
    />
  </Svg>
);
export default RightArrow;
