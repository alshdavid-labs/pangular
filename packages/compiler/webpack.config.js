const path = require("path")
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin
const DefinePlugin = require('webpack').DefinePlugin

const environments = {
  prod: "production",
  dev: "development"
}
const mode = process.argv.includes("--prod")
  ? environments.prod
  : environments.dev

if (mode === environments.prod) {
  process.env.NODE_ENV = environments.prod
}

const statsPlugin = process.argv.includes("--stats")
  ? [new BundleAnalyzerPlugin()]
  : []

module.exports = {
  entry: [
    path.join(__dirname, 'src', '/index.ts')
  ],
  mode,
  output: {
    filename: "index.js",
    path: path.join(__dirname, "build"),
    library: "",
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      '@pangular/platform': path.resolve(__dirname, '..', 'platform', 'src', 'index.ts'),
      '@pangular/core': path.resolve(__dirname, '..', 'core', 'src', 'index.ts'),
    }
  },
  plugins: [
    new DefinePlugin({
      '__constants': JSON.stringify({
        'MODE':  mode,
      })
    }),
    ...statsPlugin
  ]
}
