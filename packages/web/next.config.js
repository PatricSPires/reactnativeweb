/* eslint-disable no-param-reassign,@typescript-eslint/no-var-requires */
const path = require('path')

const withTM = require('next-transpile-modules')(['commons'], {
  resolveSymlinks: true,
})

module.exports = withTM({
  webpack(config) {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'react-native$': 'react-native-web',
    }
    config.resolve.extensions = [
      '.web.ts',
      '.web.tsx',
      '.ts',
      '.tsx',
      '.web.js',
      '.web.jsx',
      '.js',
      '.jsx',
      ...config.resolve.extensions,
    ]
    config.module.rules.push({
      test: /\.ttf$/,
      loader: 'url-loader',
      include: path.resolve(
        __dirname,
        'node_modules/react-native-vector-icons',
      ),
    })
    return config
  },
})
