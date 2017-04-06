const path = require('path');

module.exports = function (env) {
  return {
    context: path.resolve(__dirname, "src"),
    entry: './index.js',
    devtool: 'source-map',

    output: {
      path: path.resolve(__dirname, 'dist'),
      library: 'React3',
      filename: (env === 'production') ? 'react-three-renderer-min.js' : 'react-three-renderer.js'
    },

    externals: {
      three: {
        // commonjs: "three",
        // amd: "three",
        root: "THREE"
      },
      react: {
        commonjs: "react",
        amd: "react",
        root: "React"
      },
      'react-dom': {
        commonjs: "react-dom",
        amd: "react-dom",
        root: "ReactDOM"
      }
    },

    resolve: {
      extensions: [".js", ".json", ".jsx"]
    },

    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          use: 'babel-loader'
        }
      ]
    }
  }
};
