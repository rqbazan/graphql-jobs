const path = require('path')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  webpackFinal: config => {
    const {
      module: { rules },
      resolve
    } = config

    rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: [['react-app', { flow: false, typescript: true }]]
      }
    })

    rules.push({
      test: /\.css$/,
      loader: require.resolve('postcss-loader'),
      options: {
        config: {
          path: path.resolve('postcss.config.js')
        }
      }
    })

    const fileLoaderRule = rules.find(rule => rule.test.test('.svg'))
    fileLoaderRule.exclude = path.resolve('src/icons')

    rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    })

    resolve.plugins = [new TsconfigPathsPlugin()]

    resolve.extensions.push('.ts', '.tsx')

    return config
  }
}
