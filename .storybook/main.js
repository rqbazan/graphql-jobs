const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  webpackFinal: config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: [['react-app', { flow: false, typescript: true }]]
      }
    })

    config.module.rules.push({
      test: /\.css$/,
      loader: require.resolve('postcss-loader'),
      options: {
        config: {
          path: path.resolve('postcss.config.js')
        }
      }
    })

    config.resolve.extensions.push('.ts', '.tsx')

    return config
  }
}
