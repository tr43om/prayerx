import * as React from 'react';
import Svg, {SvgProps, Mask, Path, G} from 'react-native-svg';
import {memo} from 'react';
import {theme} from '../../styles';

// Auto-generated file created by svgr-cli source svg-template.js
// Run yarn icons:create to update
// Do not edit
const SvgTrash = (props: SvgProps) => (
  <Svg
    width={props.width || 256}
    height={props.height || 256}
    viewBox="0 0 20 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.293 2.293A1 1 0 0 1 8 2h4a1 1 0 0 1 1 1v1H7V3a1 1 0 0 1 .293-.707ZM5 4V3a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1h4a1 1 0 1 1 0 2h-1v13a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6H1a1 1 0 0 1 0-2h4ZM4 6v13a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V6H4Zm4 3a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1Zm5 7v-6a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0Z"
      fill={props.fill || theme.colors.primary}
    />
  </Svg>
);

const Memo = memo(SvgTrash);
export default Memo;
