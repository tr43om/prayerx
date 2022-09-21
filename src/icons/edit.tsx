// Auto-generated file created by svgr-cli source svg-template.js
// Run yarn icons:create to update
// Do not edit
import * as React from 'react';
import Svg, {SvgProps, Mask, Path, G} from 'react-native-svg';
import {memo} from 'react';

const SvgEdit = (props: SvgProps) => (
  <Svg
    width={props.width || 256}
    height={props.height || 256}
    viewBox="0 0 20 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Mask
      id="edit_svg__a"
      style={{
        maskType: 'alpha',
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={20}
      height={22}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.707.293a1 1 0 0 0-1.414 0l-11 11A1 1 0 0 0 0 12v4a1 1 0 0 0 1 1h4a1 1 0 0 0 .707-.293l11-11a1 1 0 0 0 0-1.414l-4-4ZM2 15v-2.586l10-10L14.586 5l-10 10H2Zm-1 5a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2H1Z"
        fill="#fff"
      />
    </Mask>
    <G mask="url(#edit_svg__a)">
      <Path fill="#A369EC" d="M-2-2h24v24H-2z" />
    </G>
  </Svg>
);

const Memo = memo(SvgEdit);
export default Memo;
