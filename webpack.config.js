const path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'react-image-uploader.js',
    library: 'ReactImageUploader',
    libraryTarget: 'umd'
  },
  mode: 'development'
};