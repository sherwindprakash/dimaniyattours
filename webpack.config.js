import { resolve as _resolve } from 'path';

export const entry = {
  app: './src/app.js',
};
export const target = ['web', 'es5'];
export const output = {
  filename: '[name].js',
  path: _resolve(__dirname, 'dist'),
};
export const resolve = {
  extensions: ['.js', '.jsx']
};
export const module = {
  rules: [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: 'babel-loader'
    }
  ]
};
export const optimization = {
  splitChunks: {
    cacheGroups: {
      reactVendor: {
        test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom)[\\/]/,
        name: 'vendor-react',
        chunks: 'all',
      },
    },
  },
};