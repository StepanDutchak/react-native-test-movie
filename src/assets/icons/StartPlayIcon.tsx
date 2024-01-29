import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const StartPlayIcon = (props: SvgProps) => (
  <Svg
    width={20}
    height={20}
    fill="none"
    stroke="#000"
    viewBox="0 0 24 24"
    {...props}>
    <Path
      stroke="#fff"
      strokeWidth={1.5}
      d="M20.409 9.353a2.998 2.998 0 0 1 0 5.294L7.597 21.614C5.534 22.736 3 21.276 3 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648l12.812 6.968Z"
    />
  </Svg>
);
export default StartPlayIcon;
