const withCSS = require('@zeit/next-css')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = withCSS({
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    })

    config.resolve.plugins.push(new TsconfigPathsPlugin())

    return config
  }
})
