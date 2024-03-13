import * as path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import * as webpack from "webpack";
import type {Configuration as DevServerConfiguration} from "webpack-dev-server";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CopyPlugin from "copy-webpack-plugin";


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
      assetModuleFilename: '[name].[hash][ext][query]',
      clean: true
    },
    plugins: [
      new HtmlWebpackPlugin({template: path.resolve(__dirname, 'public', 'index.html')}),
      new MiniCssExtractPlugin({
          filename: "css/[name].[contenthash:8].css",
          chunkFilename: "[id].css",
        }
      ),
      new CopyPlugin({
        patterns: [{
          from: path.resolve(__dirname, 'src/assets/images'),
          to: path.resolve(__dirname, 'build/assets/images')
        }]
      })
    ],
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.scss$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'assets/[hash][ext][query]',
          }
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader']
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
      alias: {
        '@': path.join(__dirname, 'src'),
      }
    },
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? {
      port: env.port ?? 3000,
      open: true,
      historyApiFallback: true,
      proxy: {
        '/api': {
          target: 'http://localhost:3001',
          pathRewrite: {'^/api': ''},
          logLevel: 'debug'
        }
      }

    } : undefined,
  }
  return config
};

