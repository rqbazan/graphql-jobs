/* eslint global-require: "off" */
const PROD = process.env.NODE_ENV === 'production'
const STORYBOOK = process.env.APP_ENV === 'storybook'

const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./src/**/*.tsx'],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
})

// preset-env config from https://bit.ly/2Pnlfg0
const env = require('postcss-preset-env')({
  autoprefixer: { grid: true },
  features: {
    'nesting-rules': true
  },
  browsers: ['> 1%', 'last 2 versions', 'Firefox ESR']
})

const tw = require('tailwindcss')('./tailwind.config.js')

module.exports = {
  plugins: [tw, env, PROD && !STORYBOOK && purgecss].filter(Boolean)
}
