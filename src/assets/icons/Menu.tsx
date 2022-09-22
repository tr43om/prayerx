import * as React from 'react';
import Svg, {SvgProps, Mask, Path, G} from 'react-native-svg';
import {memo} from 'react';

// Auto-generated file created by svgr-cli source svg-template.js
// Run yarn icons:create to update
// Do not edit
const SvgMenu = (props: SvgProps) => (
  <Svg
    width={props.width || 256}
    height={props.height || 256}
    viewBox="0 0 22 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Mask
      id="menu_svg__a"
      style={{
        maskType: 'alpha',
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={22}
      height={14}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 0a1 1 0 0 0 0 2h12a1 1 0 0 0 0-2H1Zm17 0a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2h-3ZM1 12a1 1 0 0 0 0 2h12a1 1 0 0 0 0-2H1Zm17 0a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2h-3ZM1.008 6C.45 6 0 6.448 0 7s.451 1 1.008 1h19.985C21.549 8 22 7.552 22 7s-.451-1-1.008-1H1.008Z"
        fill={props.color || `#000000`}
      />
    </Mask>
    <G mask="url(#menu_svg__a)">
      <Path fill="#A369EC" d="M-1-5h24v24H-1z" />
    </G>
  </Svg>
);

const Memo = memo(SvgMenu);
export default Memo;
