const path = require('path');
const pkg = require('./package.json');

const libraryName = pkg.name;

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader', 'eslint-loader'],
        include: path.resolve(__dirname, "src"),
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'},
          {loader: 'sass-loader'},
        ],
      },
      {
        test: /\.(png|gif|jpg|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 50000,
          },
        },
      },
    ],
  },
  resolve: {
    // extensions: ['.scss', '.js', '.json', '.png', '.gif', '.jpg', '.svg'],
    alias: {
      'react': path.resolve(__dirname, './node_modules/react'),
      'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
    },
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/dist/',
    filename: 'react-floating-labels.js',
    libraryTarget: 'umd',
    library: libraryName,
    umdNamedDefine: true,
  },
  externals: {
    // Don't bundle react, react-dom and styled-components   
    react: {
        commonjs: "react",
        commonjs2: "react",
        amd: "React",
        root: "React"
    },
    "react-dom": {
        commonjs: "react-dom",
        commonjs2: "react-dom",
        amd: "ReactDOM",
        root: "ReactDOM"
    },
    'styled-components': {
        commonjs: "styled-components",
        commonjs2: "styled-components",
        amd: "styled-components",
        root: "styled-components"
    }
  },
};
