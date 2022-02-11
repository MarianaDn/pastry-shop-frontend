const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const path = require('path');

const toPath = filePath => path.join(process.cwd(), filePath);

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/preset-create-react-app'],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: prop => prop.parent ? !/node_modules/.test(prop.parent.fileName) : true
    }
  },
  webpackFinal: config => ({ ...config,
    resolve: { ...config.resolve,
      plugins: [...(config.resolve.plugins || []), new TsconfigPathsPlugin({
        extensions: config.resolve.extensions
      })],
      alias: { ...config.resolve.alias,
        '@emotion/core': toPath('node_modules/@emotion/react'),
        'emotion-theming': toPath('node_modules/@emotion/react')
      }
    }
  }),
  core: {
    builder: "webpack5"
  }
};