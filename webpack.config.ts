import * as path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import * as webpack from "webpack";
import type {Configuration as DevServerConfiguration} from "webpack-dev-server";
import MiniCssExtractPlugin from "mini-css-extract-plugin";


type Mode = 'development' | 'production'

type EnvVariables = {
  mode: Mode
  port: number
}

export default (env: EnvVariables) => {
  const isDev = env.mode === 'development'
  const config: webpack.Configuration = {
    mode: env.mode ?? 'development',
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: '[name].[contenthash].js',
      clean: true
    },
    plugins: [
      new HtmlWebpackPlugin({template: path.resolve(__dirname, 'public', 'index.html')}),
      new MiniCssExtractPlugin({
          filename: "css/[name].[contenthash:8].css",
          chunkFilename: "css/[name].[contenthash:8].css",
        }
      )
    ],
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.(css)$/,
          use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader'
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? {
      port: env.port ?? 3000,
      open: true,
      historyApiFallback: true,
    } : undefined,
  }
  return config
};

