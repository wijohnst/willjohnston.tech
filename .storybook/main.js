const path = require('path');
module.exports = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-mdx-gfm',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '../src'),
    };

    const imageRule = config.module?.rules?.find((rule) => {
      const test = rule.test;
      if (!test) {
        return false;
      }
      return test.test('.svg');
    });
    imageRule.exclude = /\.svg$/;
    config.module?.rules?.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  docs: {
    autodocs: true,
  },
};
