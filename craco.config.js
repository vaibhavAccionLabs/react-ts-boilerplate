// const darkTheme = require('@ant-design/dark-theme');
const CracoLessPlugin = require('craco-less');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const chalk = require('chalk');

const green = (text) => chalk.green.bold(text);

const ProgressBar = new ProgressBarPlugin({
  format: `analyzing... [:bar] ${green('[:percent]')} - :msg`,
});

const isProductionBuild = process.env.NODE_ENV === 'production';
const analyzerMode = process.env.REACT_APP_INTERACTIVE_ANALYZE
  ? 'server'
  : 'json';
const add = [new AntdDayjsWebpackPlugin()];

if (isProductionBuild) {
  add.push(new BundleAnalyzerPlugin({ analyzerMode }), ProgressBar);
}

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  webpack: {
    plugins: {
      add /* An array of plugins for overriding default webpack config */,
    },
  },
};

// For enabling official Dark theme::
// https://github.com/ant-design/ant-design-dark-theme/blob/master/README.md
// darkTheme
// {'@primary-color': '#1DA57A'}
