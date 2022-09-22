module.exports = {
  typescript: true,
  removeViewBox: false,
  native: true,
  icon: true,
  memo: true,
  ext: 'tsx',
  ignoreExisting: true,
  replaceAttrValues: {
    white: '{props.color || `#FFFFFF`}',
    '#FFFFFF': '{props.color || `#FFFFFF`}',
    black: '{props.color || `#000000`}',
    '#111111': '{props.color || `#000000`}',
    '#000': '{props.color || `#000000`}',
  },
  svgProps: {
    width: '{props.width || 256}',
    height: '{props.height || 256}',
  },
  template: require('./svg-template'),
  indexTemplate: require('./index-template'),
  outDir: './src/assets/icons',
};
