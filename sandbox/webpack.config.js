const path = require("path")
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin

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
  entry: path.join(__dirname, "/src/main.tsx"),
  mode,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
  output: {
    filename: "app/index.js",
    path: path.join(__dirname, "public")
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      '~': path.resolve('./src'),
      '@pangular/platform': path.resolve(__dirname, '..', 'packages', 'platform', 'src', 'index.ts'),
      '@pangular/core': path.resolve(__dirname, '..', 'packages', 'core', 'src', 'index.ts'),
      '@pangular/compiler': path.resolve(__dirname, '..', 'packages', 'compiler', 'src', 'index.ts'),
    }
  },
  plugins: [
    ...statsPlugin
  ]
}
