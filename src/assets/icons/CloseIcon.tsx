import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const CloseIcon = (props: SvgProps) => (
  <Svg width={19} height={19} fill="none" {...props}>
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m1.75 1.75 8 8m8 8-8-8m0 0-8 8 16-16"
    />
  </Svg>
);
export default CloseIcon;
