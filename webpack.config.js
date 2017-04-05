const globby = require('globby')
const path = require('path')

const files = globby.sync(['./src/js/**/*.js', '!./src/js/library/*'])
const entry = Object.assign(...files.map((f) => {
  const i = f.split('/').pop().slice(0, -3)
  return {
    [i]: f,
  }
}))

module.exports = {
  entry,
  output: {
    path: path.resolve('./build/js'),
    filename: '[name].js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
        },
      },
    ],
  },
}