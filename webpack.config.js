const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'auto',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new ModuleFederationPlugin({
      name: 'host',
      remotes: {
        empresasMicroFrontEnd: 'empresasMicroFrontEnd@http://localhost:3001/remoteEntry.js',
        ParceirosMicroFrontEnd: 'parceirosMicroFrontEnd@http://localhost:3002/remoteEntry.js',
      },
      shared: {
        react: {
          singleton: true,
          eager: true,
          requiredVersion: '^18.0.0',
        },
        'react-dom': {
          singleton: true,
          eager: true,
          requiredVersion: '^18.0.0',
        },
      },
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts'],
    plugins: [new TsconfigPathsPlugin()],
  },
  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000,
    hot: true,
    historyApiFallback: true,
  },
};