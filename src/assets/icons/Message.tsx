import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {memo} from 'react';
import {theme} from '../../styles';

const SvgComponent = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 2a1 1 0 0 0-1 1v13.586l2.293-2.293A1 1 0 0 1 5 14h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3ZM.879.879A3 3 0 0 1 3 0h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5.414l-3.707 3.707A1 1 0 0 1 0 19V3A3 3 0 0 1 .879.879Z"
      fill={props.fill || theme.colors.primary}
    />
  </Svg>
);

const Memo = memo(SvgComponent);
export default Memo;
