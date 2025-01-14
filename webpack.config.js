const path = require('path');

module.exports = {
  mode: 'development', // or 'production' for production builds
  entry: './src/index.js', // Main entry point of your application
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Match .js and .jsx files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'], // Use Babel to transpile React code
          },
        },
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 3000, // Development server runs on localhost:3000
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Resolve these extensions
  },
};
