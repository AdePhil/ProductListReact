module.exports = {
  entry: {
    app: './src/app.js'
  },
  output: {
    filename: './public/build/bundle.js',
    sourceMapFilename: './public/build/bundle.map'
  },

  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },

  devtool: '#source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: '/(node_modules)/',
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
          compact: true
        }
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        use: 'url-loader?limit=100000'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};
