module.exports = {
  images: {
    domains: [ "i.imgur.com", "localhost", "/" ]
  },
  mode: 'production',
  optimization: {
    minimizer: [
      (compiler) => {
        const TerserPlugin = require('terser-webpack-plugin');
        new TerserPlugin({
        }).apply(compiler);
      },
    ],
  }
};

// next.config.js
module.exports = {
  images: {
    loader: 'custom',
    path: '/',
  },
};
