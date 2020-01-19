require('dotenv').config()
const withCSS = require('@zeit/next-css')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = withCSS({
  env: {
    API_URL: process.env.API_URL
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    })

    config.resolve.plugins.push(new TsconfigPathsPlugin())

    return config
  }
})
